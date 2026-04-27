const fs = require('fs');
const https = require('https');
const path = require('path');
const crypto = require('crypto');

async function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    // some URLs might have html entities from JSX like &amp;
    const cleanUrl = url.replace(/&amp;/g, '&');
    
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    
    // Check if file already exists
    if (fs.existsSync(destPath)) {
      const stats = fs.statSync(destPath);
      if (stats.size > 0) {
        return resolve();
      }
    }
    
    const req = https.get(cleanUrl, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Handle redirect
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
             redirectUrl = new URL(redirectUrl, cleanUrl).toString();
        }
        return downloadFile(redirectUrl, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
         return reject(new Error(`Failed to download ${cleanUrl}, status: ${res.statusCode}`));
      }
      
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlinkSync(destPath);
        reject(err);
      });
    });
    
    req.on('error', reject);
  });
}

async function run() {
  const filePath = 'src/components/OriginalUI.jsx';
  let code = fs.readFileSync(filePath, 'utf8');

  const downloads = [];
  
  // Match Next.js image URLs for oliveapp assets
  const nextRegex = /https:\/\/www\.oliveapp\.com\/_next\/image\?url=([^&"]+)([^"]*)/g;
  let match;
  while ((match = nextRegex.exec(code)) !== null) {
      const fullUrl = match[0];
      const decodedAssetPath = decodeURIComponent(match[1]); // e.g. /assets/images/...
      if (decodedAssetPath.startsWith('/assets/')) {
          downloads.push({ 
             remoteUrl: `https://www.oliveapp.com${decodedAssetPath}`, 
             localPath: decodedAssetPath,
             originalStringToReplace: fullUrl,
             replaceWith: decodedAssetPath
          });
      }
  }

  // Match relative local assets: /assets/...
  const assetRegex = /"(\/assets\/[^"]+)"/g;
  while ((match = assetRegex.exec(code)) !== null) {
      const assetPath = match[1];
      // Exclude things we already processed or know are external
      if (!assetPath.includes('unsplash')) {
          downloads.push({
              remoteUrl: `https://www.oliveapp.com${assetPath}`,
              localPath: assetPath,
              originalStringToReplace: null, // don't replace, it's already local
              replaceWith: null
          });
      }
  }

  // Match Next.js encoded unsplash images (or any external image passed to Next.js image optimizer)
  const encodedExternalRegex = /_next\/image\?url=(https(?:%3A|:)(?:%2F|\/)(?:%2F|\/)[^&"]+)([^"]*)/g;
  while ((match = encodedExternalRegex.exec(code)) !== null) {
      const fullUrl = match[0];
      const decodedUrl = decodeURIComponent(match[1]);
      if (decodedUrl.includes('images.unsplash.com')) {
          const hash = crypto.createHash('md5').update(decodedUrl).digest('hex').substring(0, 8);
          const localPath = `/assets/unsplash/${hash}.jpg`;
          downloads.push({ 
              remoteUrl: decodedUrl, 
              localPath: localPath,
              originalStringToReplace: `/${fullUrl}`, // it usually starts with /_next
              replaceWith: localPath
          });
      }
  }

  // Match direct unsplash images
  const unsplashRegex = /https:\/\/images\.unsplash\.com\/[^"]+/g;
  while ((match = unsplashRegex.exec(code)) !== null) {
      const url = match[0];
      // Generate a stable filename from URL
      const hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 8);
      const localPath = `/assets/unsplash/${hash}.jpg`;
      downloads.push({ 
          remoteUrl: url, 
          localPath: localPath,
          originalStringToReplace: url,
          replaceWith: localPath
      });
  }

  // remove duplicates based on remoteUrl
  const uniqueDownloads = Array.from(new Map(downloads.map(item => [item.remoteUrl, item])).values());
  
  console.log(`Found ${uniqueDownloads.length} unique images to download/verify...`);

  let downloadedCount = 0;
  for (const item of uniqueDownloads) {
      const fullDest = path.join('public', item.localPath);
      try {
          if (!fs.existsSync(fullDest) || fs.statSync(fullDest).size === 0) {
              console.log(`Downloading ${item.remoteUrl} -> ${fullDest}`);
              await downloadFile(item.remoteUrl, fullDest);
              downloadedCount++;
          }
      } catch (err) {
          console.error(`Failed to download ${item.remoteUrl}: ${err.message}`);
      }
  }

  // Replace occurrences in the code
  let modifiedCode = code;
  for (const item of uniqueDownloads) {
      if (item.originalStringToReplace && item.replaceWith) {
          modifiedCode = modifiedCode.split(item.originalStringToReplace).join(item.replaceWith);
      }
  }

  if (modifiedCode !== code) {
      fs.writeFileSync(filePath, modifiedCode);
      console.log('Finished updating JSX with local paths.');
  } else {
      console.log('No updates needed in JSX.');
  }
  
  console.log(`Download task complete. Downloaded ${downloadedCount} new images.`);
}

run();

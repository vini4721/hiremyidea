const fs = require('fs');
let code = fs.readFileSync('src/components/OriginalUI.jsx', 'utf8');

// Replace oliveapp Next.js URLs
code = code.replace(/https:\/\/www\.oliveapp\.com\/_next\/image\?url=([^&"]+)([^"]*)/g, (match, urlParam) => {
    return decodeURIComponent(urlParam);
});

// Replace unsplash Next.js URLs
code = code.replace(/_next\/image\?url=(https(?:%3A|:)(?:%2F|\/)(?:%2F|\/)[^&"]+)([^"]*)/g, (match, urlParam) => {
    const decodedUrl = decodeURIComponent(urlParam);
    const crypto = require('crypto');
    const hash = crypto.createHash('md5').update(decodedUrl).digest('hex').substring(0, 8);
    return `/assets/unsplash/${hash}.jpg`;
});

// Replace direct unsplash URLs
code = code.replace(/https:\/\/images\.unsplash\.com\/([^"]+)/g, (match) => {
    const crypto = require('crypto');
    const hash = crypto.createHash('md5').update(match).digest('hex').substring(0, 8);
    return `/assets/unsplash/${hash}.jpg`;
});

fs.writeFileSync('src/components/OriginalUI.jsx', code);
console.log('Fixed images!');

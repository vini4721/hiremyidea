const fs = require('fs');
let code = fs.readFileSync('src/components/OriginalUI.jsx', 'utf8');

// Replace local Next.js image URLs like /_next/image?url=%2Fassets%2Fimages%2F...
code = code.replace(/\/_next\/image\?url=([^&"]+)([^"\s,]*)/g, (match, urlParam) => {
    if (urlParam.includes('http')) return match; // skip external ones
    return decodeURIComponent(urlParam);
});

fs.writeFileSync('src/components/OriginalUI.jsx', code);
console.log('Fixed srcset images!');

const fs = require('fs');

let code = fs.readFileSync('src/components/OriginalUI.jsx', 'utf8');

// The block to replace:
const startToken = '<div\n            className="relative z-50 min-h-[500px] max-w-6xl mx-auto overflow-hidden"\n          >';
const endToken = '    <div className="md:my-24 my-8 max-w-7xl px-4 md:px-8 mx-auto">';

const startIndex = code.indexOf(startToken);
const endIndex = code.indexOf(endToken);

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find start or end tokens");
    console.log(startIndex, endIndex);
} else {
    // We need to inject the import for PhoneCarousel at the top
    if (!code.includes("import PhoneCarousel")) {
        code = code.replace("import React", "import React from 'react';\nimport PhoneCarousel from './PhoneCarousel';");
        if (!code.includes("import PhoneCarousel")) {
            // fallback
            code = "import PhoneCarousel from './PhoneCarousel';\n" + code;
        }
    }

    const newBlock = `<PhoneCarousel />\n`;
    code = code.substring(0, startIndex) + newBlock + code.substring(endIndex);
    
    fs.writeFileSync('src/components/OriginalUI.jsx', code);
    console.log("Successfully replaced the static phone mockup with PhoneCarousel!");
}

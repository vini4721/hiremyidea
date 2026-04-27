const fs = require('fs');

const uiPath = './src/components/OriginalUI.jsx';
let content = fs.readFileSync(uiPath, 'utf8');

if (!content.includes('import Navbar from')) {
    content = content.replace("import PhoneCarousel from './PhoneCarousel';", "import PhoneCarousel from './PhoneCarousel';\nimport Navbar from './Navbar';");
}

const navStartStr = '<div\n                className="z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full lg:flex font-pall sticky inset-x-0 top-40"\n              >';
const navEndStr = '<div\n                className="relative mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-4 py-2 lg:hidden font-pall"\n              >';

const navStartIndex = content.indexOf(navStartStr);
const navEndIndex = content.indexOf(navEndStr);

if (navStartIndex !== -1 && navEndIndex !== -1) {
    content = content.substring(0, navStartIndex) + '<Navbar />\n              ' + content.substring(navEndIndex);
    fs.writeFileSync(uiPath, content, 'utf8');
    console.log("Navbar patched!");
} else {
    console.log("Could not find start/end markers for navbar.");
}

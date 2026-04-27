const fs = require('fs');
let nav = fs.readFileSync('src/components/Navbar.jsx', 'utf8');
let logo = fs.readFileSync('/tmp/original_logo.jsx', 'utf8');

// Extract just the <svg>...</svg> from logo
const svgStart = logo.indexOf('<svg');
const svgEnd = logo.lastIndexOf('</svg>') + 6;
const svgContent = logo.substring(svgStart, svgEnd);

// Find the logo <a> tag in Navbar.jsx
const aStart = nav.indexOf('<a href="/" className="font-bold text-2xl');
const aEnd = nav.indexOf('</a>', aStart) + 4;

const newLogoBlock = `<a aria-label="Return to homepage" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black transition-opacity hover:opacity-80" href="/">
${svgContent}
</a>`;

nav = nav.substring(0, aStart) + newLogoBlock + nav.substring(aEnd);
fs.writeFileSync('src/components/Navbar.jsx', nav);
console.log('Logo replaced successfully.');

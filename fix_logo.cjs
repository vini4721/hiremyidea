const fs = require('fs');
let nav = fs.readFileSync('src/components/Navbar.jsx', 'utf8');
let logo = fs.readFileSync('/tmp/original_logo.jsx', 'utf8');

// Extract just the FIRST <svg>...</svg> from logo
const svgStart = logo.indexOf('<svg');
const svgEnd = logo.indexOf('</svg>') + 6;
const svgContent = logo.substring(svgStart, svgEnd);

// Find the broken logo <a> tag in Navbar.jsx
const aStart = nav.indexOf('<a aria-label="Return to homepage"');
const aEnd = nav.indexOf('</a>', aStart) + 4; // this is tricky because there might be other </a> inside the broken block!

// Actually, in Navbar.jsx, the broken block ends right before {/* Center Nav Links */}
const centerNavStart = nav.indexOf('{/* Center Nav Links */}');

const newLogoBlock = `<a aria-label="Return to homepage" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black transition-opacity hover:opacity-80" href="/">
${svgContent}
</a>\n\n        `;

nav = nav.substring(0, aStart) + newLogoBlock + nav.substring(centerNavStart);
fs.writeFileSync('src/components/Navbar.jsx', nav);
console.log('Fixed logo successfully.');

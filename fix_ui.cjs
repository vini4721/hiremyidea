const fs = require('fs');

const uiPath = './src/components/OriginalUI.jsx';
let content = fs.readFileSync(uiPath, 'utf8');

// Add imports
if (!content.includes('import Navbar from')) {
    content = content.replace("import PhoneCarousel from './PhoneCarousel';", "import PhoneCarousel from './PhoneCarousel';\nimport Navbar from './Navbar';\nimport { motion } from 'framer-motion';\n\nconst MarqueeRow = ({ tags, direction = 1, speed = 25 }) => {\n  const duplicatedTags = [...tags, ...tags, ...tags, ...tags];\n  return (\n    <div className=\"flex w-full overflow-hidden py-3\">\n      <motion.div\n        className=\"flex gap-4 items-center whitespace-nowrap\"\n        animate={{ x: direction > 0 ? [0, -1000] : [-1000, 0] }}\n        transition={{ duration: speed, repeat: Infinity, ease: \"linear\" }}\n      >\n        {duplicatedTags.map((tag, i) => (\n          <div key={i} className={`flex items-center gap-3 px-5 py-2.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-base font-semibold ${tag.safe ? 'bg-white/90 text-[#1F3824] border border-white/50' : 'bg-white/90 text-[#8C1818] border border-white/50'}`}>\n            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] text-white ${tag.safe ? 'bg-[#386641]' : 'bg-[#C13A3A]'}`}>\n              {tag.safe ? \"✓\" : \"✕\"}\n            </div>\n            {tag.label}\n          </div>\n        ))}\n      </motion.div>\n    </div>\n  );\n};\n\nconst row1 = [{ label: \"Non-GMO\", safe: true }, { label: \"Saccharin\", safe: false }, { label: \"Cholesterol-Free\", safe: true }, { label: \"High Fibre\", safe: true }, { label: \"Organic Ingredients\", safe: true }];\nconst row2 = [{ label: \"Artificial Colors\", safe: false }, { label: \"Gluten-Free\", safe: true }, { label: \"Sodium Nitrite\", safe: false }, { label: \"Aspartame\", safe: false }, { label: \"TBHQ\", safe: false }];\n");
}

// Replace desktop navbar
const navStartStr = '<div\n                className="z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full lg:flex font-pall sticky inset-x-0 top-40"\n              >';
const navEndStr = '<div\n                className="relative mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-4 py-2 lg:hidden font-pall"\n              >';

const navStartIndex = content.indexOf(navStartStr);
const navEndIndex = content.indexOf(navEndStr);

if (navStartIndex !== -1 && navEndIndex !== -1) {
    // Replace the block but keep navEndStr
    content = content.substring(0, navStartIndex) + '<Navbar />\n              ' + content.substring(navEndIndex);
    console.log("Replaced desktop navbar!");
}

// Replace Marquee section
const marqueeStartStr = '<div>\n            <div\n              className="bg-gradient-to-b overflow-hidden from-[#FFF0F0] to-[#FFC2D0] rounded-2xl w-full w-[300px] h-[300px] md:w-[500px] md:h-[500px]"\n            >';
const marqueeEndStr = '<div\n          className="p-4 bg-white max-w-5xl mx-auto rounded-2xl grid grid-cols-1 lg:grid-cols-2"\n        >';

const mStartIndex = content.indexOf(marqueeStartStr);
const mEndIndex = content.indexOf(marqueeEndStr);

if (mStartIndex !== -1 && mEndIndex !== -1) {
    const replacement = `<div>
            <div className="bg-[#FFF1F2] rounded-3xl w-full w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative overflow-hidden flex items-center justify-center border border-white/50">
              <div className="absolute flex flex-col gap-4 w-[180%]" style={{ transform: "rotate(-15deg) skewX(-15deg)" }}>
                <MarqueeRow tags={row1} direction={1} speed={25} />
                <MarqueeRow tags={row2} direction={-1} speed={30} />
                <MarqueeRow tags={row1} direction={1} speed={28} />
                <MarqueeRow tags={row2} direction={-1} speed={35} />
              </div>
            </div>
          </div>
        </div>
        `;
    // Notice I added an extra `</div>` and `</div>` at the end of the replacement to balance the removed tags
    // The mEndIndex matched `<div className="p-4 bg-white max-w-5xl...` which was AFTER the closing `</div>` of the PREVIOUS grid!
    // Original had `</div> </div>` right before `marqueeEndStr`.
    // We replaced up to `marqueeEndStr`, so we deleted them. We must add them back.
    // Wait, the original had line 5978 `</div>`, line 5979 `</div>`.
    // Let's just add the `</div>` tags into the replacement string.

    content = content.substring(0, mStartIndex) + replacement + content.substring(mEndIndex);
    console.log("Replaced marquee block!");
}

fs.writeFileSync(uiPath, content, 'utf8');
console.log("Done.");

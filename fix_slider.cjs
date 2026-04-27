const fs = require('fs');

let code = fs.readFileSync('src/components/OriginalUI.jsx', 'utf8');

// The slider container starts right after: className="absolute z-2 top-1/2 -translate-y-1/2 flex gap-2 items-center animate-infinite-slider"
// and ends with `</div>` around line 1450.
// A simpler way: Find the inner HTML of the slider container and duplicate it!

const startStr = 'className="absolute z-2 top-1/2 -translate-y-1/2 flex gap-2 items-center animate-infinite-slider"';
const endStr = 'className="text-sm font-[500] text-neutral-600 max-w-sm mt-4"'; 
// That's the paragraph below the slider!

const startIdx = code.indexOf(startStr);
const paragraphIdx = code.indexOf(endStr, startIdx);

if (startIdx > -1 && paragraphIdx > -1) {
    // Find where the slider container's opening tag ends
    const openingTagEnd = code.indexOf('>', startIdx) + 1;
    
    // Find where the slider container's closing tag begins
    // We can go backwards from paragraphIdx until we find `</div>`
    const sliceBeforeParagraph = code.substring(openingTagEnd, paragraphIdx);
    const lastClosingDivIdx = sliceBeforeParagraph.lastIndexOf('</div>');
    
    if (lastClosingDivIdx > -1) {
        // The children content
        // Note: the slider container is inside a wrapper which is closed before the paragraph.
        // Let's just find the first closing </div> that matches the opening tag.
        
        let depth = 1;
        let childrenEndIdx = -1;
        for (let i = openingTagEnd; i < code.length; i++) {
            if (code.substring(i, i+4) === '<div') depth++;
            if (code.substring(i, i+5) === '</div') depth--;
            if (depth === 0) {
                childrenEndIdx = i;
                break;
            }
        }
        
        if (childrenEndIdx > -1) {
            const childrenHTML = code.substring(openingTagEnd, childrenEndIdx);
            
            // Reconstruct the container with doubled children
            const newCode = code.substring(0, openingTagEnd) + childrenHTML + childrenHTML + code.substring(childrenEndIdx);
            fs.writeFileSync('src/components/OriginalUI.jsx', newCode);
            console.log("Successfully doubled slider children");
        } else {
            console.log("Could not find closing tag for slider container");
        }
    }
}

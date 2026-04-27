const fs = require('fs');

let code = fs.readFileSync('src/components/OriginalUI.jsx', 'utf8');

// 1. Scan & Detect Scanner Line
code = code.replace(
    'className="absolute w-[80%] h-1 bg-[#1F3824] rounded-full"',
    'className="absolute w-[80%] h-1 bg-[#1F3824] rounded-full animate-scanner"'
);

// 2. Data Analysis & Validation Carousel
// We need to replace the flex container opening tag and duplicate its contents.
const flexStartToken = 'className="absolute z-2 top-1/2 -translate-y-1/2 flex gap-2 items-center"';
const flexStartIdx = code.indexOf(flexStartToken);
if (flexStartIdx > -1) {
    // Replace the opening tag to include animation
    code = code.replace(
        'className="absolute z-2 top-1/2 -translate-y-1/2 flex gap-2 items-center"\n                  style={{"transform":"none"}}',
        'className="absolute z-2 top-1/2 -translate-y-1/2 flex gap-2 items-center animate-infinite-slider"'
    );
}

// 3. Actionable Insights floating images
// Find the three images
code = code.replace(
    'className="md:w-30 md:h-40 h-40 w-30 rounded-3xl border-2 border-white object-cover translate-x-20 -rotate-12 scale-90"',
    'className="md:w-30 md:h-40 h-40 w-30 rounded-3xl border-2 border-white object-cover translate-x-20 -rotate-12 scale-90 animate-float-left"'
);

code = code.replace(
    'className="md:w-30 md:h-40 h-40 w-30 rounded-3xl border-2 border-white object-cover relative z-20"',
    'className="md:w-30 md:h-40 h-40 w-30 rounded-3xl border-2 border-white object-cover relative z-20 animate-float"'
);

code = code.replace(
    'className="md:w-30 md:h-40 h-40 w-30 rounded-3xl border-2 border-white object-cover -translate-x-20 rotate-12 scale-90"',
    'className="md:w-30 md:h-40 h-40 w-30 rounded-3xl border-2 border-white object-cover -translate-x-20 rotate-12 scale-90 animate-float-right"'
);

fs.writeFileSync('src/components/OriginalUI.jsx', code);
console.log('Animations applied successfully to OriginalUI.jsx');

const fs = require('fs');

let code = fs.readFileSync('src/components/OriginalUI.jsx', 'utf8');

// 1. Remove static slider item styles
code = code.replace(/style=\{\{"opacity":"0\.30000000000000004","transform":"scale\(0\.8\)"\}\}/g, '');
code = code.replace(/style=\{\{"opacity":"0\.3","transform":"scale\(0\.8\)"\}\}/g, '');
code = code.replace(/style=\{\{"opacity":"1","transform":"scale\(1\.2\)"\}\}/g, '');

// 2. Animate the infinite sliders
// They usually look like: className="absolute z-1 top-1/2 -translate-y-1/2 flex gap-2 items-center" style={{"transform":"translateX(-482px)"}}
code = code.replace(/className="([^"]*flex gap-2 items-center[^"]*)"\s*style=\{\{"transform":"translateX\([^\)]+\)"\}\}/g, (match, classNames) => {
    return `className="${classNames} animate-infinite-slider"`;
});

// There might be another slider wrapper.
code = code.replace(/className="([^"]*flex[^"]*)"\s*style=\{\{"transform":"translateX\([^\)]+\)"\}\}/g, (match, classNames) => {
    return `className="${classNames} animate-infinite-slider"`;
});

// 3. Hero crossfade
// Replace "transition-opacity duration-1000 opacity-100" -> "opacity-0 animate-hero-fade"
// Replace "transition-opacity duration-1000 opacity-0" -> "opacity-0 animate-hero-fade"
// Note: We need 4 different delays: hero-slide-1, hero-slide-2, etc.
let heroCount = 1;
code = code.replace(/className="absolute inset-0 w-full h-full transition-opacity duration-1000 opacity-(100|0)"/g, (match) => {
    let delayClass = `hero-slide-${heroCount}`;
    heroCount++;
    return `className="absolute inset-0 w-full h-full opacity-0 animate-hero-fade ${delayClass}"`;
});

fs.writeFileSync('src/components/OriginalUI.jsx', code);
console.log('Animations applied to JSX!');

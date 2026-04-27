const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// The Next.js image components usually use a complex nested structure for the slider
// Let's inject a global fallback for the image src attributes parsing if the React one failed
if(!css.includes('@keyframes infiniteSlider')) {
  css += `
@keyframes infiniteSlider {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 5)); } 
}
.animate-infinite-slider {
  animation: infiniteSlider 20s linear infinite;
}
`;
  fs.writeFileSync('src/index.css', css);
  console.log('Added missing CSS animations');
}

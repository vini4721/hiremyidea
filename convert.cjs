const fs = require('fs');

try {
  let html = fs.readFileSync('olive.html', 'utf8');
  
  // Extract body
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) {
    console.log('No body found');
    process.exit(1);
  }
  let body = bodyMatch[1];

  // Fix relative image tags
  body = body.replace(/src="\/_next\//gi, 'src="https://www.oliveapp.com/_next/');
  body = body.replace(/src="\/assets\//gi, 'src="https://www.oliveapp.com/assets/');
  body = body.replace(/src="\/_vercel\//gi, 'src="https://www.oliveapp.com/_vercel/');
  // Remove scripts
  body = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove next.js hidden elements, specific classes and tags
  body = body.replace(/<div hidden="">.*?<\/div>/gi, '');
  body = body.replace(/<!--[\s\S]*?-->/g, ''); // html comments

  // Convert HTML to basic JSX
  // Translate class -> className
  body = body.replace(/\bclass="/gi, 'className="');
  // Translate for -> htmlFor
  body = body.replace(/\bfor="/gi, 'htmlFor="');
  // Self closing tags fix: img, input, hr, br, path, svg, etc
  body = body.replace(/<(img|input|br|hr|source|meta|link)([^>]*?)([^\/])>/gi, '<$1$2$3 />');

  // Convert inline style strings to objects is too complex via regex, but let's check if there are many.
  body = body.replace(/style="([^"]*)"/g, (match, css) => {
    // Quick inline style to react style object for common cases
    const styleObj = {};
    css.split(';').forEach(rule => {
      if (!rule.trim()) return;
      const [key, value] = rule.split(':');
      if(key && value) {
         const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
         styleObj[camelKey] = value.trim();
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });
  
  // Custom Tailwind SVG attributes
  body = body.replace(/clip-rule/gi, 'clipRule');
  body = body.replace(/fill-rule/gi, 'fillRule');
  body = body.replace(/fill-opacity/gi, 'fillOpacity');
  body = body.replace(/stroke-width/gi, 'strokeWidth');
  body = body.replace(/stroke-linecap/gi, 'strokeLinecap');
  body = body.replace(/stroke-linejoin/gi, 'strokeLinejoin');
  body = body.replace(/stroke-dasharray/gi, 'strokeDasharray');
  body = body.replace(/stroke-dashoffset/gi, 'strokeDashoffset');
  body = body.replace(/stroke-miterlimit/gi, 'strokeMiterlimit');

  const reactCode = `import React from 'react';

const OriginalUI = () => {
  return (
    <>
      ${body}
    </>
  );
};

export default OriginalUI;
`;

  fs.writeFileSync('src/components/OriginalUI.jsx', reactCode);
  console.log('Successfully created src/components/OriginalUI.jsx');
} catch (e) {
  console.error(e);
}

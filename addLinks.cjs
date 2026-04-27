const fs = require('fs');

try {
  let html = fs.readFileSync('olive.html', 'utf8');

  // Extract head
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (!headMatch) process.exit(1);

  const head = headMatch[1];
  // Extract links and styles
  const appendages = [];
  
  const linkRegex = /<link[^>]*>/gi;
  let match;
  while ((match = linkRegex.exec(head)) !== null) {
    let linkStr = match[0];
    if (linkStr.includes('rel="stylesheet"') || linkStr.includes('as="font"') || linkStr.includes('as="image"')) {
      linkStr = linkStr.replace(/href="\//g, 'href="https://www.oliveapp.com/');
      appendages.push(linkStr);
    }
  }

  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  while ((match = styleRegex.exec(head)) !== null) {
    appendages.push(match[0]);
  }

  let localHtml = fs.readFileSync('index.html', 'utf8');
  
  // Clean previously injected if any (just safe)
  
  // Insert before </head>
  localHtml = localHtml.replace('</head>', '\n    ' + appendages.join('\n    ') + '\n  </head>');
  fs.writeFileSync('index.html', localHtml);
  console.log('Appended ' + appendages.length + ' elements to index.html');
} catch(e) {
  console.error(e);
}

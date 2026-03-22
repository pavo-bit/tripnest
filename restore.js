const fs = require('fs');

const headReplacements = [
  { from: '<script type="module" crossorigin src="/assets/main-[a-zA-Z0-9_-]+\\.js"></script>', to: '<script type="module" src="/src/main.js"></script>' },
  { from: '<link rel="stylesheet" crossorigin href="/assets/main-[a-zA-Z0-9_-]+\\.css">', to: '<link rel="stylesheet" href="/src/styles/style.css" />' }
];

const imageReplacements = [
  { match: /\/assets\/([a-zA-Z0-9_ -]+)-[a-zA-Z0-9_]{8}\.(jpg|png|webp|svg)/g, replace: '/src/assets/images/$1.$2' }
];

function restore(filename) {
  let content = fs.readFileSync('dist/' + filename, 'utf8');

  // Replace heads
  headReplacements.forEach(r => {
    content = content.replace(new RegExp(r.from), r.to);
  });

  // Replace assets
  imageReplacements.forEach(r => {
    content = content.replace(r.match, r.replace);
  });

  // Wait, dodham-poster is what we care about. Let's just hardcode fix any /assets/.*.jpg to /src/assets/images/...
  content = content.replace(/\/assets\/([^/"]+)-[A-Za-z0-9_-]{8}\.(jpg|png|webp|svg)/g, '/src/assets/images/$1.$2');

  fs.writeFileSync(filename, content, 'utf8');
}

['index.html', 'trips.html', 'destinations.html'].forEach(f => {
  restore(f);
  console.log('Restored: ' + f);
});

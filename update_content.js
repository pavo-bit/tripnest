const fs = require('fs');
const path = require('path');

// 1. Copy the images
const brainDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\35a76cdd-fbcc-403c-b255-e7ea271d2be2';
const assetsDir = 'dist/assets';
const img1 = 'media__1774200475051.jpg'; // Harshil
const img2 = 'media__1774200475111.jpg'; // Tungnath

fs.copyFileSync(path.join(brainDir, img1), path.join(assetsDir, img1));
fs.copyFileSync(path.join(brainDir, img2), path.join(assetsDir, img2));
console.log('Images copied successfully to dist/assets');

// 2. Search and replace in the HTML files
['index.html', 'trips.html', 'destinations.html'].forEach(filename => {
    let content = fs.readFileSync(filename, 'utf8');

    // Replace images
    content = content.replace(/https:\/\/images.unsplash.com\/photo-1626014903706-53818e3ddc84\?w=1000&q=80/g, `/assets/${img1}`);
    content = content.replace(/https:\/\/images.unsplash.com\/photo-1618245367352-7df74274c4cd\?w=1000&q=80/g, `/assets/${img2}`);

    // Replace prices (both in trip card and in detail panels)
    content = content.replace(/₹8,999 \/ person/g, '₹5,499 / person');
    content = content.replace(/₹7,499 \/ person/g, '₹5,499 / person');

    // Also look for slightly differently formatted prices and replace them just in case
    content = content.replace(/₹8,999/g, '₹5,499');
    content = content.replace(/₹7,499/g, '₹5,499');

    fs.writeFileSync(filename, content, 'utf8');
    console.log(`Updated content in ${filename}`);
});

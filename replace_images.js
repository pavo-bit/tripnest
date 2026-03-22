const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\35a76cdd-fbcc-403c-b255-e7ea271d2be2';
const assetsDir = 'dist/assets';

const oldImg1 = 'media__1774200475051.jpg';
const oldImg2 = 'media__1774200475111.jpg';

const newImg1 = 'media__1774202118327.jpg'; // Harshil
const newImg2 = 'media__1774202118385.jpg'; // Tungnath

// Copy new images
fs.copyFileSync(path.join(brainDir, newImg1), path.join(assetsDir, newImg1));
fs.copyFileSync(path.join(brainDir, newImg2), path.join(assetsDir, newImg2));
console.log('Successfully copied the two new poster files.');

// Update HTML files
['index.html', 'trips.html', 'destinations.html'].forEach(filename => {
    let content = fs.readFileSync(filename, 'utf8');
    content = content.split(oldImg1).join(newImg1);
    content = content.split(oldImg2).join(newImg2);
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`Updated images in ${filename}`);
});

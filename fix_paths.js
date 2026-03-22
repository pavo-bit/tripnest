const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\35a76cdd-fbcc-403c-b255-e7ea271d2be2';
const assetsDir = 'src/assets/images';

const newImg1 = 'media__1774202118327.jpg'; // Harshil
const newImg2 = 'media__1774202118385.jpg'; // Tungnath

// Copy new images
fs.copyFileSync(path.join(brainDir, newImg1), path.join(assetsDir, newImg1));
fs.copyFileSync(path.join(brainDir, newImg2), path.join(assetsDir, newImg2));
console.log('Successfully copied the two new poster files to src/assets/images.');

// Update HTML files
['index.html', 'trips.html', 'destinations.html'].forEach(filename => {
    let content = fs.readFileSync(filename, 'utf8');
    
    // Replace "/assets/" with "/src/assets/images/" for the target images
    const oldPath1 = '/assets/' + newImg1;
    const oldPath2 = '/assets/' + newImg2;
    
    const newPath1 = '/src/assets/images/' + newImg1;
    const newPath2 = '/src/assets/images/' + newImg2;
    
    content = content.split(oldPath1).join(newPath1);
    content = content.split(oldPath2).join(newPath2);
    
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`Updated paths in ${filename}`);
});

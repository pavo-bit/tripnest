const fs = require('fs');

const harshilImg = '/src/assets/images/media__1774202118327.jpg';
const tungnathImg = '/src/assets/images/media__1774202118385.jpg';

['index.html', 'trips.html', 'destinations.html'].forEach(filename => {
    let content = fs.readFileSync(filename, 'utf8');
    
    // Replace any Unsplash URLs associated with Harshil
    content = content.replace(/src="https:\/\/images\.unsplash\.com\/photo-1626014903706-53818e3ddc84[^"]*"/g, `src="${harshilImg}"`);
    
    // Replace any Unsplash URLs associated with Tungnath
    content = content.replace(/src="https:\/\/images\.unsplash\.com\/photo-1618245367352-7df74274c4cd[^"]*"/g, `src="${tungnathImg}"`);
    
    // Also, just to be extremely thorough, let's catch any stray "/assets/media..." that might still exist for them
    content = content.replace(/src="\/assets\/media__[0-9]+\.jpg"/g, (match) => {
        if (content.includes('Harshil')) {
             // Let's rely on the previous fixes for details panel, this is mainly to scrub
        }
        return match;
    });

    fs.writeFileSync(filename, content, 'utf8');
    console.log(`Replaced card images in ${filename}`);
});

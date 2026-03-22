const fs = require('fs');
const dir = 'dist/assets';

fs.readdirSync(dir).forEach(file => {
    if (file.startsWith('main-') && file.endsWith('.js')) {
        const fullPath = dir + '/' + file;
        let content = fs.readFileSync(fullPath, 'utf8');
        let newContent = content.replace(/"dodham"\s*,\s*"saurashtra"\s*,\s*"manali"\s*,\s*"chardham"\s*,\s*"kbt"\s*,\s*"chopta"/g, '"dodham","saurashtra","manali","chardham","kbt","chopta","harshil","tungnath"');
        
        if (content !== newContent) {
            fs.writeFileSync(fullPath, newContent);
            console.log('Successfully patched', file);
        } else {
            console.log('No matches found in', file);
        }
    }
});

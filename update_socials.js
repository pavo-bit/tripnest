const fs = require('fs');
const path = require('path');

const fbUrl = 'https://www.facebook.com/share/1AoTvx5ioE/';
const twitterUrl = 'https://x.com/tripnest13';
const ytUrl = 'https://youtube.com/@tripnest13?si=5_s_qWp5QZLOsebZ';

function updateSocialsInFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    let originalContent = content;

    // Facebook
    content = content.replace(/<a[^>]*href="[^"]*"([^>]*)>([^<]*<i class="fab fa-facebook-f"><\/i[^>]*>)<\/a>/g, 
        `<a href="${fbUrl}" target="_blank"$1>$2</a>`);

    // Twitter
    content = content.replace(/<a[^>]*href="[^"]*"([^>]*)>([^<]*<i class="fab fa-twitter"><\/i[^>]*>)<\/a>/g, 
        `<a href="${twitterUrl}" target="_blank"$1>$2</a>`);

    // YouTube
    content = content.replace(/<a[^>]*href="[^"]*"([^>]*)>([^<]*<i class="fab fa-youtube"><\/i[^>]*>)<\/a>/g, 
        `<a href="${ytUrl}" target="_blank"$1>$2</a>`);
        
    // Also handle possible `fa-facebook` (without -f) just in case
    content = content.replace(/<a[^>]*href="[^"]*"([^>]*)>([^<]*<i class="fab fa-facebook"><\/i[^>]*>)<\/a>/g, 
        `<a href="${fbUrl}" target="_blank"$1>$2</a>`);

    if (content !== originalContent) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Updated socials in ${filepath}`);
    }
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
        const fullPath = path.join(dir, f);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!f.includes('node_modules') && !f.includes('.git')) {
                walk(fullPath);
            }
        } else if (f.endsWith('.html')) {
            updateSocialsInFile(fullPath);
        }
    }
}

walk('.');
console.log('Finished updating social links.');

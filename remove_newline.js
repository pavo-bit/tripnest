const fs = require('fs');
['index.html', 'trips.html', 'destinations.html'].forEach(filename => {
    let content = fs.readFileSync(filename, 'utf8');
    
    // Look for the literal \n followed by anything until <style id="trip-nest-fixes">
    const idx = content.indexOf('\\n');
    if (idx !== -1 && idx < 500) {
        // If the literal `\n` is near the top of the file, let's just wipe it out completely.
        content = content.replace('\\n', '');
        console.log(`Replaced literal newline text in ${filename}`);
    } else {
        // Broad replace just in case it's floating anywhere else as a literal node
        content = content.replace(/\\n/g, '');
        console.log(`Globally replaced literal newline text in ${filename}`);
    }

    fs.writeFileSync(filename, content, 'utf8');
});

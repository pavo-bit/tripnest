const fs = require('fs');

['index.html', 'trips.html', 'destinations.html'].forEach(filename => {
    let content = fs.readFileSync(filename, 'utf8');

    // 1. Extract the panels from the incorrect location.
    // The panels start at <!-- HARSHIL CONTENT --> and end with the last </div> of TUNGNATH CONTENT.
    // Since TUNGNATH CONTENT has exactly 3 closing </div>s at the end, we can match up to that.
    const extractRegex = /\s*<\!-- HARSHIL CONTENT -->[\s\S]*?<\!-- TUNGNATH CONTENT -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*/;
    
    const match = content.match(extractRegex);
    if (!match) {
        console.log("Panels not found in " + filename);
        return;
    }

    const panelsHTML = match[0];
    
    // Remove the panels from their current location
    content = content.replace(extractRegex, '');

    // 2. Inject the panels right BEFORE the closing </section> of #trip-detail-panel.
    // We know #trip-detail-panel is immediately followed by <!-- GALLERY -->
    // So we look for: </section>\n\n    <!-- GALLERY -->
    
    if (content.includes('</section>\n\n    <!-- GALLERY -->')) {
        content = content.replace('</section>\n\n    <!-- GALLERY -->', panelsHTML + '\n    </section>\n\n    <!-- GALLERY -->');
    } else if (content.includes('</section>\n    <!-- GALLERY -->')) {
         content = content.replace('</section>\n    <!-- GALLERY -->', panelsHTML + '\n    </section>\n    <!-- GALLERY -->');
    } else {
        // Fallback: replace <!-- GALLERY -->
        content = content.replace('<!-- GALLERY -->', panelsHTML + '\n    </section>\n\n    <!-- GALLERY -->');
    }

    fs.writeFileSync(filename, content, 'utf8');
    console.log("Moved panels in " + filename);
});

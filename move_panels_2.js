const fs = require('fs');

['index.html', 'trips.html', 'destinations.html'].forEach(filename => {
    let content = fs.readFileSync(filename, 'utf8');

    // 1. Extract the panels.
    const extractRegex = /\s*<\!-- HARSHIL CONTENT -->[\s\S]*?<\!-- TUNGNATH CONTENT -->[\s\S]*?(?:<\/div>\s*){3}/;
    
    const match = content.match(extractRegex);
    if (!match) {
        console.log("Panels not found in " + filename);
        return;
    }

    let panelsHTML = match[0];
    
    // Remove ALL instances of these panels from the file
    content = content.replace(new RegExp(extractRegex.source, 'g'), '');
    
    // Ensure panelsHTML ends cleanly
    panelsHTML = '\n' + panelsHTML.trimEnd() + '\n';

    // 2. Inject right before the first </section> after id="content-chopta"
    const parts = content.split('id="content-chopta"');
    if (parts.length < 2) {
        console.log("Could not find content-chopta in " + filename);
        return;
    }
    
    // parts[1] contains the rest of the file. 
    // The first </section> in parts[1] is the closing tag of #trip-detail-panel.
    let injectionApplied = false;
    parts[1] = parts[1].replace('</section>', (m) => {
        injectionApplied = true;
        return panelsHTML + '    </section>';
    });

    if(!injectionApplied) {
       console.log("Failed to inject inside trip-detail-panel in " + filename);
    } else {
       console.log("Successfully moved panels into #trip-detail-panel in " + filename);
       content = parts[0] + 'id="content-chopta"' + parts[1];
       fs.writeFileSync(filename, content, 'utf8');
    }
});

const fs = require('fs');

['index.html', 'trips.html', 'destinations.html'].forEach(filename => {
    let content = fs.readFileSync(filename, 'utf8');
    
    // First, let's remove ALL of our previous messy <style> injections 
    // to start with a clean slate in the <head>.
    // This regex looks for `<style id="injected-css">...</style>` or `<style>#trip-detail-panel...</style>`
    content = content.replace(/<style[^>]*>[\s\S]*?#trip-detail-panel[\s\S]*?<\/style>/g, '');
    content = content.replace(/<style[^>]*>[\s\S]*?#trip-tabs[\s\S]*?<\/style>/g, '');
    content = content.replace(/<style[^>]*>[\s\S]*?color:\s*#fff[\s\S]*?<\/style>/g, '');

    // Now, inject the perfectly targeted CSS right before </head>
    const cleanCSS = `
  <style id="trip-nest-fixes">
    /* Hide the extraneous trip switching tabs in the details pane */
    #trip-tabs { display: none !important; }

    /* Force the places covered and inclusions boxes to be black text for readability */
    #trip-detail-panel .inc-box,
    #trip-detail-panel .inc-box *,
    #trip-detail-panel .inc-item,
    #trip-detail-panel .inc-item * {
        color: #000 !important;
    }

    /* Force the itinerary and info tiles (Duration, Pickup, Departure, Pricing) to be white text */
    #trip-detail-panel .info-tiles,
    #trip-detail-panel .info-tiles *,
    #trip-detail-panel .itinerary,
    #trip-detail-panel .itinerary * {
        color: #ffffff !important;
    }
  </style>
`;
    
    if (content.includes('</head>')) {
        content = content.replace(/<\/head>/i, cleanCSS + '</head>');
        fs.writeFileSync(filename, content, 'utf8');
        console.log('Successfully cleaned and fixed CSS in', filename);
    } else {
        console.log('Error: </head> not found in', filename);
    }
});

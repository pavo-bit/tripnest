const fs = require('fs');

['index.html', 'trips.html', 'destinations.html'].forEach(filename => {
    let content = fs.readFileSync(filename, 'utf8');
    
    // Split the content by id="content-chopta" to safely replace ONLY inside the Chopta block
    if (content.includes('id="content-chopta"')) {
        let parts = content.split('id="content-chopta"');
        
        // Find the end of the chopta div
        let endChopta = parts[1].indexOf('id="content-harshil"');
        if (endChopta === -1) endChopta = parts[1].indexOf('</section>');
        
        if (endChopta !== -1) {
            let choptaBlock = parts[1].substring(0, endChopta);
            let rest = parts[1].substring(endChopta);
            
            // Revert the price in Chopta block
            choptaBlock = choptaBlock.replace(/₹5,499/g, '₹7,499');
            
            parts[1] = choptaBlock + rest;
            content = parts.join('id="content-chopta"');
        }
    }
    
    // Also we need to fix the trip CARD for Chopta!
    if (content.includes('Chopta - Tungnath - Chandrashila Trek')) {
        let parts = content.split('Chopta - Tungnath - Chandrashila Trek');
        let cardEnd = parts[1].indexOf('</div></div></a>');
        if (cardEnd !== -1) {
            let cardBlock = parts[1].substring(0, cardEnd);
            let rest = parts[1].substring(cardEnd);
            
            // Revert the price in the Chopta card
            cardBlock = cardBlock.replace(/₹5,499/g, '₹7,499');
            
            parts[1] = cardBlock + rest;
            content = parts.join('Chopta - Tungnath - Chandrashila Trek');
        }
    }

    fs.writeFileSync(filename, content, 'utf8');
    console.log('Restored Chopta price in', filename);
});

const fs = require('fs');
const cssBlock = `
    <!-- GLOBAL FIX FOR TRIP PANEL TEXT COLORS AND TABS -->
    <style>
      #trip-tabs {
        display: none !important;
      }
      #trip-detail-panel .card-body,
      #trip-detail-panel p,
      #trip-detail-panel h3,
      #trip-detail-panel h4,
      #trip-detail-panel .inc-item,
      #trip-detail-panel .inc-item *,
      #trip-detail-panel .day-cnt,
      #trip-detail-panel .day-cnt *,
      #trip-detail-panel .day-hd,
      #trip-detail-panel .it-lbl,
      #trip-detail-panel .it-val {
        color: #000 !important;
      }
      #trip-detail-panel h3.text-ol {
        color: var(--ol-darkest) !important;
      }
      #trip-detail-panel .inc-box {
        color: #000 !important;
      }
    </style>
`;

['index.html', 'trips.html', 'destinations.html'].forEach(filename => {
   let content = fs.readFileSync(filename, 'utf8');
   if(!content.includes('GLOBAL FIX FOR TRIP PANEL')) {
       content = content.replace(/(<section\s+id="trip-detail-panel"[^>]*>)/, '$1\n' + cssBlock);
       fs.writeFileSync(filename, content);
       console.log("Fixed", filename);
   }
});

const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
console.log('Index of trip-detail-panel:', html.indexOf('id="trip-detail-panel"'));
console.log('Index of content-harshil:', html.indexOf('id="content-harshil"'));
console.log('Index of reviews:', html.indexOf('<!-- REVIEWS -->'));
console.log('Index of cta:', html.indexOf('id="cta"'));

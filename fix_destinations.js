const fs = require('fs');

const cardsHTML = `
          <!-- Harshil -->
          <div class="trip-card featured reveal">
            <div class="card-img">
              <img
                src="https://images.unsplash.com/photo-1626014903706-53818e3ddc84?w=600&q=80&auto=format&fit=crop"
                alt="Harshil Valley"
              />
              <div class="pill pill-featured">
                <i class="fas fa-flag"></i> New
              </div>
              <div class="pill pill-price">₹8,999/person</div>
              <div class="pill pill-dur">
                <i class="fas fa-clock"></i> 2N / 3D
              </div>
            </div>
            <div class="card-body">
              <h3>Harshil Valley Getaway</h3>
              <p>
                Experience the peaceful valleys, Gartang Gali, and divine temples along the Bhagirathi River.
              </p>
              <div class="card-meta">
                <span><i class="fas fa-map-marker-alt"></i> Dehradun Pickup</span><span><i class="fas fa-calendar"></i> Every Weekend</span>
              </div>
              <div class="card-foot">
                <div class="stars">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><span>(120)</span>
                </div>
                <span
                  class="btn btn-primary btn-sm"
                  onclick="showTrip('harshil')"
                  style="cursor: pointer"
                  >View Details</span
                >
              </div>
            </div>
          </div>

          <!-- Tungnath -->
          <div class="trip-card featured reveal">
            <div class="card-img">
              <img
                src="https://images.unsplash.com/photo-1618245367352-7df74274c4cd?w=600&q=80&auto=format&fit=crop"
                alt="Tungnath Chopta"
              />
              <div class="pill pill-featured">
                <i class="fas fa-flag"></i> New
              </div>
              <div class="pill pill-price">₹7,499/person</div>
              <div class="pill pill-dur">
                <i class="fas fa-clock"></i> 2N / 3D
              </div>
            </div>
            <div class="card-body">
              <h3>Tungnath & Deoria Tal Trek</h3>
              <p>
                Trek through rhododendron forests to the highest Shiva temple and witness the stunning Deoria Tal.
              </p>
              <div class="card-meta">
                <span><i class="fas fa-map-marker-alt"></i> Rishikesh Pickup</span><span><i class="fas fa-calendar"></i> Every Weekend</span>
              </div>
              <div class="card-foot">
                <div class="stars">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><span>(215)</span>
                </div>
                <span
                  class="btn btn-primary btn-sm"
                  onclick="showTrip('tungnath')"
                  style="cursor: pointer"
                  >View Details</span
                >
              </div>
            </div>
          </div>
`;

let content = fs.readFileSync('destinations.html', 'utf8');
content = content.replace(/(<\/div>\s*<\/div>\s*<\/section>\s*<\!-- CATEGORIES -->)/, (match) => {
  return cardsHTML + '\n        ' + match;
});
fs.writeFileSync('destinations.html', content);

console.log('Fixed destinations.html');

const fs = require('fs');

const cardsHTML = `
          <!-- Harshil -->
          <div class="trip-card reveal">
            <div class="card-img">
              <img
                src="https://images.unsplash.com/photo-1626014903706-53818e3ddc84?w=600&q=80&auto=format&fit=crop"
                alt="Harshil Valley"
              />
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
          <div class="trip-card reveal">
            <div class="card-img">
              <img
                src="https://images.unsplash.com/photo-1618245367352-7df74274c4cd?w=600&q=80&auto=format&fit=crop"
                alt="Tungnath Chopta"
              />
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

const panelsHTML = `
      <!-- HARSHIL CONTENT -->
      <div id="content-harshil" class="section" style="display: none; padding-top: 32px; padding-bottom: 50px;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px">
          <div class="sec-head text-center" style="margin-bottom: 36px">
            <div class="badge badge-ol">✦ Beautiful Valleys</div>
            <h2 style="font-size: clamp(1.6rem, 3.5vw, 2.6rem); margin-top: 10px">Harshil Valley Getaway</h2>
            <div class="rule"></div>
            <p>Dehradun - Harshil - Dehradun · 2 Nights / 3 Days</p>
          </div>
          <div class="dd-grid">
            <div>
              <div class="dd-img">
                <img src="https://images.unsplash.com/photo-1626014903706-53818e3ddc84?w=1000&q=80" alt="Harshil Valley" style="object-position: center bottom" />
              </div>
              <div class="info-tiles">
                <div class="info-tile">
                  <div class="it-icon"><i class="fas fa-clock"></i></div>
                  <div><div class="it-lbl">Duration</div><div class="it-val">2 Nights / 3 Days</div></div>
                </div>
                <div class="info-tile">
                  <div class="it-icon"><i class="fas fa-map-marker-alt"></i></div>
                  <div><div class="it-lbl">Pickup Point</div><div class="it-val">Dehradun</div></div>
                </div>
                <div class="info-tile">
                  <div class="it-icon"><i class="fas fa-calendar"></i></div>
                  <div><div class="it-lbl">Departure</div><div class="it-val">Every Weekend</div></div>
                </div>
                <div class="info-tile">
                  <div class="it-icon"><i class="fas fa-rupee-sign"></i></div>
                  <div><div class="it-lbl">Starting From</div><div class="it-val">₹8,999 / person</div></div>
                </div>
              </div>
              
              <!-- Temples Covered -->
              <div class="inc-box" style="background: var(--white); border: 1px solid rgba(90, 122, 50, 0.18); border-radius: var(--r-md); padding: 20px 22px; margin-bottom: 18px;">
                <div style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 700; color: var(--ol-darkest); margin-bottom: 12px;">📌 Temples Covered</div>
                <div style="display: flex; flex-direction: column; gap: 8px">
                  <div class="inc-item"><i class="fas fa-om"></i><div><h4>Mukhba Temple (Winter seat of Goddess Ganga)</h4></div></div>
                  <div class="inc-item"><i class="fas fa-om"></i><div><h4>Kashi Vishwanath Temple (Uttarkashi)</h4></div></div>
                </div>
              </div>

              <!-- Inclusions -->
              <div class="inc-box" style="background: var(--white); border: 1px solid rgba(90, 122, 50, 0.18); border-radius: var(--r-md); padding: 20px 22px; margin-bottom: 18px;">
                <div style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 700; color: var(--ol-darkest); margin-bottom: 12px;">✅ What's Included</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px">
                  <div class="inc-item"><i class="fas fa-check-circle"></i><div><h4>Hotel stay</h4></div></div>
                  <div class="inc-item"><i class="fas fa-check-circle"></i><div><h4>Breakfast & Dinner</h4></div></div>
                  <div class="inc-item"><i class="fas fa-check-circle"></i><div><h4>Transport (Dehradun - Dehradun)</h4></div></div>
                  <div class="inc-item"><i class="fas fa-check-circle"></i><div><h4>Driver, toll, parking</h4></div></div>
                </div>
                <div style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 700; color: var(--ol-darkest); margin-top: 20px; margin-bottom: 12px;">❌ Not Included</div>
                <div style="display: grid; grid-template-columns: 1fr; gap: 10px">
                  <div class="inc-item"><i class="fas fa-times-circle" style="color: #d9534f"></i><div><h4>Any Entry fees / Specific sightseeing tickets</h4></div></div>
                </div>
              </div>
              <a href="https://wa.me/917388594640" target="_blank" class="btn btn-wa" style="width: 100%; justify-content: center"><i class="fab fa-whatsapp" style="font-size: 1.1rem"></i> Book Now on WhatsApp</a>
            </div>
            
            <div class="itinerary">
              <h3>Day-by-Day Itinerary</h3>
              <div style="position: relative; padding-left: 20px; border-left: 2px dashed rgba(90,122,50,0.3); display: flex; flex-direction: column; gap: 30px;">
                <div style="position: relative">
                  <div style="position: absolute; left: -26px; top: 0; width: 10px; height: 10px; border-radius: 50%; background: var(--ol-bright); border: 2px solid var(--ol-dark);"></div>
                  <div class="day-hd">Day 1: Departure to Harshil</div>
                  <div class="day-cnt">
                    <p><strong>Morning:</strong> Depart early from Dehradun (around 6:00 AM) to avoid traffic and enjoy the mountain views.</p>
                    <p><strong>Afternoon:</strong> Drive via Mussoorie, Chinyalisaur, and Uttarkashi.</p>
                    <p><strong>Evening:</strong> Arrive in Harshil, check into your riverside homestay or hotel, and enjoy a peaceful walk along the Bhagirathi River.</p>
                    <p><strong>Night:</strong> Riverside Bonfire & Music Night. Relax under the starlit Himalayan sky.</p>
                  </div>
                </div>
                <div style="position: relative">
                  <div style="position: absolute; left: -26px; top: 0; width: 10px; height: 10px; border-radius: 50%; background: var(--ol-bright); border: 2px solid var(--ol-dark);"></div>
                  <div class="day-hd">Day 2: Gartang Gali & Uttarkashi</div>
                  <div class="day-cnt">
                    <p><strong>Morning:</strong> Visit Mukhba temple (winter seat of Goddess Ganga) offering a peaceful look into local religious traditions.</p>
                    <p><strong>Afternoon:</strong> Head to Gartang Gali. This historic 150-year-old wooden skywalk offers a thrilling trek along the cliffside of the Nelong Valley.</p>
                    <p><strong>Evening:</strong> Reach Uttarkashi and check into your hotel. Visit the Kashi Vishwanath Temple for the evening Aarti if time permits.</p>
                    <p><strong>Night:</strong> Bonfire & Music at your Uttarkashi stay.</p>
                  </div>
                </div>
                <div style="position: relative">
                  <div style="position: absolute; left: -26px; top: 0; width: 10px; height: 10px; border-radius: 50%; background: var(--ol-bright); border: 2px solid var(--ol-dark);"></div>
                  <div class="day-hd">Day 3: Return to Dehradun</div>
                  <div class="day-cnt">
                    <p><strong>Morning:</strong> Visit the Nehru Institute of Mountaineering (NIM) or take a peaceful walk across the Joshiyara Suspension Bridge.</p>
                    <p><strong>Afternoon:</strong> Depart for Dehradun. Stop at Chinyalisaur for a view of the Tehri Lake backwaters.</p>
                    <p><strong>Evening:</strong> Reach Dehradun by 6:00 PM.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TUNGNATH CONTENT -->
      <div id="content-tungnath" class="section" style="display: none; padding-top: 32px; padding-bottom: 50px;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px">
          <div class="sec-head text-center" style="margin-bottom: 36px">
            <div class="badge badge-ol">✦ Mountain Trek</div>
            <h2 style="font-size: clamp(1.6rem, 3.5vw, 2.6rem); margin-top: 10px">Tungnath & Deoria Tal Trek</h2>
            <div class="rule"></div>
            <p>Rishikesh - Chopta - Rishikesh · 2 Nights / 3 Days</p>
          </div>
          <div class="dd-grid">
            <div>
              <div class="dd-img">
                <img src="https://images.unsplash.com/photo-1618245367352-7df74274c4cd?w=1000&q=80" alt="Tungnath Temple" style="object-position: center bottom" />
              </div>
              <div class="info-tiles">
                <div class="info-tile">
                  <div class="it-icon"><i class="fas fa-clock"></i></div>
                  <div><div class="it-lbl">Duration</div><div class="it-val">2 Nights / 3 Days</div></div>
                </div>
                <div class="info-tile">
                  <div class="it-icon"><i class="fas fa-map-marker-alt"></i></div>
                  <div><div class="it-lbl">Pickup Point</div><div class="it-val">Rishikesh/Dehradun</div></div>
                </div>
                <div class="info-tile">
                  <div class="it-icon"><i class="fas fa-calendar"></i></div>
                  <div><div class="it-lbl">Departure</div><div class="it-val">Every Weekend</div></div>
                </div>
                <div class="info-tile">
                  <div class="it-icon"><i class="fas fa-rupee-sign"></i></div>
                  <div><div class="it-lbl">Starting From</div><div class="it-val">₹7,499 / person</div></div>
                </div>
              </div>
              
              <!-- Temples Covered -->
              <div class="inc-box" style="background: var(--white); border: 1px solid rgba(90, 122, 50, 0.18); border-radius: var(--r-md); padding: 20px 22px; margin-bottom: 18px;">
                <div style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 700; color: var(--ol-darkest); margin-bottom: 12px;">📌 Temples Covered</div>
                <div style="display: flex; flex-direction: column; gap: 8px">
                  <div class="inc-item"><i class="fas fa-om"></i><div><h4>Dhari Devi Temple</h4></div></div>
                  <div class="inc-item"><i class="fas fa-om"></i><div><h4>Tungnath Temple (Highest Shiva Temple)</h4></div></div>
                  <div class="inc-item"><i class="fas fa-om"></i><div><h4>Omkareshwar Temple (Ukhimath)</h4></div></div>
                </div>
              </div>

              <!-- Inclusions -->
              <div class="inc-box" style="background: var(--white); border: 1px solid rgba(90, 122, 50, 0.18); border-radius: var(--r-md); padding: 20px 22px; margin-bottom: 18px;">
                <div style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 700; color: var(--ol-darkest); margin-bottom: 12px;">✅ What's Included</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px">
                  <div class="inc-item"><i class="fas fa-check-circle"></i><div><h4>Hotel stay</h4></div></div>
                  <div class="inc-item"><i class="fas fa-check-circle"></i><div><h4>Breakfast & Dinner</h4></div></div>
                  <div class="inc-item"><i class="fas fa-check-circle"></i><div><h4>Transport (Delhi - Delhi)</h4></div></div>
                  <div class="inc-item"><i class="fas fa-check-circle"></i><div><h4>Driver, toll, parking</h4></div></div>
                </div>
                <div style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 700; color: var(--ol-darkest); margin-top: 20px; margin-bottom: 12px;">❌ Not Included</div>
                <div style="display: grid; grid-template-columns: 1fr; gap: 10px">
                  <div class="inc-item"><i class="fas fa-times-circle" style="color: #d9534f"></i><div><h4>Pony / Doli</h4></div></div>
                  <div class="inc-item"><i class="fas fa-times-circle" style="color: #d9534f"></i><div><h4>Forest Entry / Trek Permissions</h4></div></div>
                </div>
              </div>
              <a href="https://wa.me/917388594640" target="_blank" class="btn btn-wa" style="width: 100%; justify-content: center"><i class="fab fa-whatsapp" style="font-size: 1.1rem"></i> Book Now on WhatsApp</a>
            </div>
            
            <div class="itinerary">
              <h3>Day-by-Day Itinerary</h3>
              <div style="position: relative; padding-left: 20px; border-left: 2px dashed rgba(90,122,50,0.3); display: flex; flex-direction: column; gap: 30px;">
                <div style="position: relative">
                  <div style="position: absolute; left: -26px; top: 0; width: 10px; height: 10px; border-radius: 50%; background: var(--ol-bright); border: 2px solid var(--ol-dark);"></div>
                  <div class="day-hd">Day 1: Arrival in Chopta</div>
                  <div class="day-cnt">
                    <p><strong>Morning:</strong> Depart Dehradun/Rishikesh early to reach Devprayag for the holy confluence; afterward, continue toward Srinagar and a scenic drive along the Alaknanda.</p>
                    <p><strong>Afternoon:</strong> Visit Dhari Devi Temple for darshan, before ascending through the lush, winding forests of Ukhimath toward the higher altitudes.</p>
                    <p><strong>Evening:</strong> Arrive in Chopta to witness the sunset over the Himalayan peaks, followed by a quiet evening of stargazing and a warm dinner.</p>
                  </div>
                </div>
                <div style="position: relative">
                  <div style="position: absolute; left: -26px; top: 0; width: 10px; height: 10px; border-radius: 50%; background: var(--ol-bright); border: 2px solid var(--ol-dark);"></div>
                  <div class="day-hd">Day 2: Tungnath Temple & Chandrashila</div>
                  <div class="day-cnt">
                    <p><strong>Morning:</strong> Begin your climb with a hot mountain breakfast in the meadows, then trek through the rhododendron forests to reach the ancient Tungnath Temple and the towering Chandrashila Peak.</p>
                    <p><strong>Afternoon:</strong> Spend some time at the summit for photography before beginning your descent back to Tungnath for a quick break and then continuing down to the base at Chopta.</p>
                    <p><strong>Evening:</strong> Return to your stay to relax your legs, enjoy a hot early dinner, and soak in the peaceful evening vibes of the meadows as the sun sets.</p>
                  </div>
                </div>
                <div style="position: relative">
                  <div style="position: absolute; left: -26px; top: 0; width: 10px; height: 10px; border-radius: 50%; background: var(--ol-bright); border: 2px solid var(--ol-dark);"></div>
                  <div class="day-hd">Day 3: Deoria Tal & Return</div>
                  <div class="day-cnt">
                    <p><strong>Morning:</strong> Enjoy an early breakfast at your stay in Chopta before driving to Sari village to begin the trek to Deoria Tal for the stunning lake reflection of the Himalayas.</p>
                    <p><strong>Afternoon:</strong> Visit the ancient Omkareshwar Temple in Ukhimath before starting the long drive back through the scenic mountain valleys.</p>
                    <p><strong>Evening:</strong> Enjoy a scenic drive through the winding "Ghats", arriving back in Rishikesh/Dehradun by nightfall to celebrate the end of your journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`;

function injectIntoFile(filename) {
  let content = fs.readFileSync(filename, 'utf8');

  // Insert cards into .trips-grid
  // We need to find `class="trips-grid"` and then append near the end of that grid
  // usually it ends with `</div>\n        <div class="text-center"` or `</div>\n      </div>\n    </section>`
  // Let's replace the ending of trips-grid correctly:
  content = content.replace(/(<\!-- (?:[A-Za-z \-]+) -->[\s\S]*?)<\/div>\s+(?:<div class="text-center"|<\!-- WHY CHOOSE US -->)/, (match, p1) => {
    // wait, we can just find `<div class="trips-grid">` and its closing `</div>`
    // Since we know the file, we can just replace `<div class="text-center" style="margin-top: 40px">` with our cards + that tag
    if (content.includes('class="text-center" style="margin-top: 40px"')) {
       return cardsHTML + '\n        </div>\n        <div class="text-center" style="margin-top: 40px">';
    }
    return match; // fallback
  });
  
  // if not found by the above, maybe we can find exact patterns
  if(filename === 'trips.html' || filename === 'destinations.html') {
    // in trips.html, grid ends before `</div>\n    </section>` without the view all trips button maybe
    content = content.replace(/(<\/div>\s+)<\/div>\s*<\/section>\s*<\!-- WHY CHOOSE US -->/, (match, p1) => {
       return cardsHTML + match;
    });
  }

  // Insert panels right before `</section>\n\n    <!-- WHY CHOOSE US -->`
  content = content.replace(/<\/section>\s*<\!-- WHY CHOOSE US -->/, (match) => {
    return panelsHTML + '\n    ' + match;
  });

  fs.writeFileSync(filename, content, 'utf8');
}

['index.html', 'trips.html', 'destinations.html'].forEach(filename => {
  try {
     injectIntoFile(filename);
     console.log('Successfully injected into ' + filename);
  } catch(e) {
     console.log('Error injecting into ' + filename + ': ' + e.message);
  }
});


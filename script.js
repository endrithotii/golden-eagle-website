/* ═══════════════════════════════════════════════
   GOLDEN EAGLE — script.js
   ═══════════════════════════════════════════════ */

/* ── Translations ── */
const translations = {
  en: {
    nav_home: 'Home', nav_products: 'Products', nav_taste: 'Taste',
    nav_about: 'About', nav_reviews: 'Reviews', nav_cta: 'Contact Us',

    hero_badge: 'New Formula 2025',
    hero_title1: 'PURE', hero_title2: 'ENERGY',
    hero_sub: 'Unleash unstoppable energy.<br/>Zero compromise — all power.',
    hero_shop: 'Shop Now', hero_watch: 'Watch Story',
    hero_countries: 'Countries', hero_experience: 'Experience', hero_employees: 'Employees',
    hero_bottom1: 'SOARINGLY', hero_bottom2: 'POWERFUL',
    hero_scroll: 'Scroll', hero_variants_label: 'Choose Variant',
    award_title: 'Kosovo Export Award', award_year: 'Since 1994',

    ticker_energy: 'ENERGY DRINK', ticker_countries: 'COUNTRIES',
    ticker_since: 'SINCE 1994', ticker_pure: 'PURE POWER', ticker_zero: 'ZERO LIMITS',

    variant_classic: 'Classic', variant_sugar_free: 'Sugar Free',
    variant_red: 'Red Edition', variant_tropical: 'Tropical', variant_coffee: 'Coffee',

    products_eyebrow: 'Our Range',
    products_title: 'The Full <span class="highlight">Lineup</span>',
    products_desc: "From classic energy to tropical bliss — there's a Golden Eagle for every moment.",

    badge_bestseller: 'Bestseller', badge_zero_sugar: 'Zero Sugar',
    badge_limited: 'Limited', badge_new: 'New', badge_natural: '100% Natural',
    btn_add: '+ Add',

    prod1_desc: 'The original. Bold caffeine kick, taurine boost, iconic golden taste.',
    prod1_t1: '80mg caffeine', prod1_t2: 'Taurine', prod1_t3: 'B-vitamins',
    prod2_desc: 'All the energy, none of the sugar. Clean fuel for the driven.',
    prod2_t1: '0g sugar', prod2_t3: 'Stevia',
    prod3_desc: 'Intense wild berry flavor. Double the boldness, double the rush.',
    prod3_t1: 'Wild Berry', prod3_t2: 'Intense', prod3_t3: 'Bold',
    prod4_desc: 'Mango, passion fruit, pineapple — paradise in every sip.',
    prod4_t1: 'Mango', prod4_t2: 'Passion Fruit', prod4_t3: 'Exotic',
    prod5_name: 'Coffee Edition',
    prod5_desc: 'Energy meets espresso. The ultimate morning power-up.',
    prod5_t1: 'Espresso', prod5_t2: 'Rich', prod5_t3: 'Smooth',
    prod6_name: 'Natural 100%',
    prod6_desc: "Pure fruit. No additives, no compromise. Just nature's best.",
    prod6_t1: '100% Fruit', prod6_t2: 'No Additives', prod6_t3: 'Pure',

    taste_eyebrow: "What's Inside",
    taste_title: 'Crafted For <span class="highlight">Peak</span> Performance',
    taste_desc: 'Every ingredient is chosen to fuel your body and sharpen your mind.',
    ing1_name: 'Taurine',     ing1_desc: 'Enhances physical performance and reduces muscle fatigue.',
    ing2_name: 'Caffeine',    ing2_desc: 'Sharp focus and sustained energy without the crash.',
    ing3_name: 'B-Vitamins',  ing3_desc: 'Essential for metabolism and nervous system function.',
    ing4_name: 'Ginseng Extract', ing4_desc: 'Natural adaptogen that boosts stamina and resilience.',

    about_eyebrow: 'Our Story',
    about_title: 'Born in Kosovo.<br/><span class="highlight">Built for the World.</span>',
    about_text1: 'Founded in 1994 in Suharekë, Kosovo, Frutex began as a dream to bring world-class beverages from the heart of the Balkans. Three decades later, Golden Eagle Energy Drink soars across 35+ countries — from Europe to the USA, Australia, Asia, and Africa.',
    about_text2: 'With over 200 passionate employees and a relentless drive for quality, we live by one truth: <em>"Happiness is helping, not profiting."</em>',
    pillar1: 'Quality & Perfection', pillar2: 'Sustainability',
    pillar3: 'Innovation', pillar4: 'Customer Focus',
    about_btn: 'Learn More',

    reviews_eyebrow: 'Testimonials',
    reviews_title: 'Fans <span class="highlight">Love It</span>',
    rev1_text: '"Golden Eagle Classic is my go-to before every training session. Nothing else compares to that clean energy surge."',
    rev2_text: '"I switched to Sugar Free and never looked back. All the boost, none of the guilt. Absolutely love the taste."',
    rev3_text: '"The Tropical edition tastes like a vacation in a can. I\'ve been ordering cases every month since it launched. Incredible product."',
    rev4_text: '"Coffee Edition is my morning ritual now. Skip the café line — this is better and hits twice as fast. Highly recommend."',
    rev5_text: '"Natural 100% juice is what I give my kids. Pure, clean, and they can\'t get enough of it. A brand I genuinely trust."',

    contact_eyebrow: 'Get In Touch',
    contact_title: 'Ready to <span class="highlight">Soar?</span>',
    contact_desc: "Whether you're a distributor, retailer, or just a fan — we want to hear from you.",
    form_name: 'Name', form_name_ph: 'Your name', form_email: 'Email',
    form_subject: 'Subject', form_msg: 'Message', form_msg_ph: 'Tell us what you need...',
    form_opt1: 'Distribution Inquiry', form_opt2: 'Wholesale Order',
    form_opt3: 'Partnership', form_opt4: 'General Question',
    form_submit: 'Send Message',

    footer_tagline: 'Energy That Soars.<br/>Made in Kosovo. Loved Worldwide.',
    footer_company: 'Company', footer_about: 'About Us', footer_foundation: 'Foundation',
    footer_careers: 'Careers', footer_news: 'News', footer_brand: 'Brand Assets',
    footer_follow: 'Follow Us',
    footer_copy: '© 2025 Frutex / Golden Eagle. All rights reserved.',
    footer_made: 'Made with ⚡ in Kosovo',
  },

  sq: {
    nav_home: 'Kreu', nav_products: 'Produktet', nav_taste: 'Shija',
    nav_about: 'Rreth Nesh', nav_reviews: 'Vlerësimet', nav_cta: 'Na Kontaktoni',

    hero_badge: 'Formula e Re 2025',
    hero_title1: 'PASTËR', hero_title2: 'ENERGJI',
    hero_sub: 'Lëshoni energji të papërmbajtshme.<br/>Zero kompromis — gjithë fuqia.',
    hero_shop: 'Blej Tani', hero_watch: 'Shiko Historinë',
    hero_countries: 'Shtete', hero_experience: 'Përvojë', hero_employees: 'Punonjës',
    hero_bottom1: 'LARTËSOHU', hero_bottom2: 'I FUQISHËM',
    hero_scroll: 'Rrëshqit', hero_variants_label: 'Zgjedh Variantin',
    award_title: 'Çmimi i Eksportit të Kosovës', award_year: 'Që nga 1994',

    ticker_energy: 'PIJE ENERGJIKE', ticker_countries: 'SHTETE',
    ticker_since: 'QË NGA 1994', ticker_pure: 'FUQI E PASTËR', ticker_zero: 'ZERO KUFIJ',

    variant_classic: 'Klasik', variant_sugar_free: 'Pa Sheqer',
    variant_red: 'Edicioni i Kuq', variant_tropical: 'Tropikal', variant_coffee: 'Kafe',

    products_eyebrow: 'Gama Jonë',
    products_title: 'Linja e <span class="highlight">Plotë</span>',
    products_desc: 'Nga energjia klasike deri te kënaqësia tropikale — ka një Golden Eagle për çdo moment.',

    badge_bestseller: 'Më i Shitur', badge_zero_sugar: 'Pa Sheqer',
    badge_limited: 'I Kufizuar', badge_new: 'I Ri', badge_natural: '100% Natyral',
    btn_add: '+ Shto',

    prod1_desc: 'Origjinali. Goditje kofeine, rritje taurine, shije e famshme e artë.',
    prod1_t1: '80mg kafeinë', prod1_t2: 'Taurinë', prod1_t3: 'Vitamina B',
    prod2_desc: 'Gjithë energjia, asnjë sheqer. Karburant i pastër për të motivuarit.',
    prod2_t1: '0g sheqer', prod2_t3: 'Stevia',
    prod3_desc: 'Shije intensive manaferre të egra. Dyfish guximi, dyfish vërzimi.',
    prod3_t1: 'Manaferrë', prod3_t2: 'Intensive', prod3_t3: 'E Fortë',
    prod4_desc: 'Mango, fruta pasioni, ananas — parajsë në çdo gëllënjkë.',
    prod4_t1: 'Mango', prod4_t2: 'Fruta Pasioni', prod4_t3: 'Ekzotike',
    prod5_name: 'Edicioni Kafe',
    prod5_desc: 'Energjia takon espresso. Ngritja supreme e mëngjesit.',
    prod5_t1: 'Espresso', prod5_t2: 'E Pasur', prod5_t3: 'E Butë',
    prod6_name: 'Natyral 100%',
    prod6_desc: 'Frut i pastër. Pa aditivë, pa kompromis. Vetëm më e mira e natyrës.',
    prod6_t1: '100% Frut', prod6_t2: 'Pa Aditivë', prod6_t3: 'i Pastër',

    taste_eyebrow: 'Çfarë ka Brenda',
    taste_title: 'Krijuar për <span class="highlight">Performancë</span> Maksimale',
    taste_desc: 'Çdo përbërës zgjidhet për të ushqyer trupin tuaj dhe mprehur mendjen tuaj.',
    ing1_name: 'Taurinë',         ing1_desc: 'Rrit performancën fizike dhe zvogëlon lodhjen muskulore.',
    ing2_name: 'Kafeinë',         ing2_desc: 'Fokus i mprehtë dhe energji e qëndrueshme pa rënie.',
    ing3_name: 'Vitamina B',      ing3_desc: 'Esenciale për metabolizmin dhe funksionin e sistemit nervor.',
    ing4_name: 'Ekstrakt Ginseng',ing4_desc: 'Adaptogjen natyral që rrit qëndrueshmërinë dhe rezistencën.',

    about_eyebrow: 'Historia Jonë',
    about_title: 'Lindur në Kosovë.<br/><span class="highlight">Ndërtuar për Botën.</span>',
    about_text1: 'E themeluar në 1994 në Suharekë, Kosovë, Frutex filloi si ëndërr për të sjellë pije të klasit botëror nga zemra e Ballkanit. Tre dekada më vonë, Golden Eagle fluturon nëpër 35+ vende — nga Europa deri në SHBA, Australi, Azi dhe Afrikë.',
    about_text2: 'Me mbi 200 punonjës pasionarë dhe vendosmëri të paepur për cilësi, jetojmë nga një e vërtetë: <em>"Lumturi është të ndihmosh, jo të fitosh."</em>',
    pillar1: 'Cilësia & Përsosmëria', pillar2: 'Qëndrueshmëria',
    pillar3: 'Inovacioni', pillar4: 'Fokusi tek Klienti',
    about_btn: 'Mëso Më Shumë',

    reviews_eyebrow: 'Dëshmitë',
    reviews_title: 'Fansat e <span class="highlight">Duan</span>',
    rev1_text: '"Golden Eagle Klasik është zgjedhja ime para çdo stërvitjeje. Asgjë nuk krahason me atë valë energjie të pastër."',
    rev2_text: '"Kalova te Pa Sheqer dhe nuk u ktheva. Gjithë energjia, asnjë pendim. E dua shijen absolut."',
    rev3_text: '"Edicioni Tropikal ka shijen e një pushimi në kanaçe. Po porosis raste çdo muaj që nga lansimi. Produkt i jashtëzakonshëm."',
    rev4_text: '"Edicioni Kafe është rituali im i mëngjesit tani. Anash kafesë — kjo është më e mirë dhe ndikon dyfish më shpejt."',
    rev5_text: '"Lëngun Natyral 100% ua jap fëmijëve të mi. I pastër dhe nuk mund të ngopen. Një markë të cilën e besoj sinqerisht."',

    contact_eyebrow: 'Na Kontaktoni',
    contact_title: 'Gati të <span class="highlight">Fluturosh?</span>',
    contact_desc: 'Qoftë shpërndarës, shitës me pakicë apo thjesht fan — dëshirojmë të dëgjojmë nga ju.',
    form_name: 'Emri', form_name_ph: 'Emri juaj', form_email: 'Email',
    form_subject: 'Subjekti', form_msg: 'Mesazhi', form_msg_ph: 'Na tregoni çfarë ju nevojitet...',
    form_opt1: 'Kërkesë Shpërndarjeje', form_opt2: 'Porosi me Shumicë',
    form_opt3: 'Partneritet', form_opt4: 'Pyetje e Përgjithshme',
    form_submit: 'Dërgo Mesazhin',

    footer_tagline: 'Energji që Fluturon.<br/>Bërë në Kosovë. E Dashur Kudo.',
    footer_company: 'Kompania', footer_about: 'Rreth Nesh', footer_foundation: 'Fondacioni',
    footer_careers: 'Karriera', footer_news: 'Lajme', footer_brand: 'Asetet e Markës',
    footer_follow: 'Na Ndiqni',
    footer_copy: '© 2025 Frutex / Golden Eagle. Të gjitha të drejtat e rezervuara.',
    footer_made: 'Bërë me ⚡ në Kosovë',
  }
};

/* ── Apply language ── */
let currentLang = localStorage.getItem('ge_lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('ge_lang', lang);
  document.documentElement.lang = lang;
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t[el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t[el.dataset.i18nHtml];
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t[el.dataset.i18nPlaceholder];
    if (val !== undefined) el.placeholder = val;
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// Apply saved or default language on load
applyLang(currentLang);

/* ── Custom cursor ── */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animateCursor() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  follower.style.left = fx + 'px';
  follower.style.top  = fy + 'px';
  requestAnimationFrame(animateCursor);
})();

/* ── Navbar scroll state ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  updateActiveLink();
});

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
function updateActiveLink() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.dataset.section === current);
  });
}

/* ── Particle canvas ── */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x    = Math.random() * canvas.width;
    this.y    = Math.random() * canvas.height;
    this.size = Math.random() * 1.8 + 0.4;
    this.vx   = (Math.random() - 0.5) * 0.3;
    this.vy   = (Math.random() - 0.5) * 0.3 - 0.15;
    this.life = Math.random();
    this.maxLife = Math.random() * 0.6 + 0.4;
    this.gold = Math.random() > 0.6;
  }
  update() {
    this.x += this.vx; this.y += this.vy;
    this.life -= 0.003;
    if (this.life <= 0) this.reset();
  }
  draw() {
    const alpha = Math.min(this.life / this.maxLife, 1) * 0.5;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.gold
      ? `rgba(212,160,23,${alpha})`
      : `rgba(255,255,255,${alpha * 0.4})`;
    ctx.fill();
  }
}

const particles = [];
for (let i = 0; i < 120; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ── Hero can 3D tilt ── */
const canWrap = document.getElementById('hero-can-wrap');
const can3d   = document.getElementById('can-3d');
if (canWrap && can3d) {
  canWrap.addEventListener('mousemove', e => {
    const rect = canWrap.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width  / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    can3d.style.transform = `perspective(900px) rotateY(${dx * 22}deg) rotateX(${-dy * 14}deg)`;
    const ci = document.getElementById('can-img');
    if (ci && !ci.classList.contains('can-flip')) ci.style.animationPlayState = 'paused';
  });
  canWrap.addEventListener('mouseleave', () => {
    can3d.style.transform = '';
    const ci = document.getElementById('can-img');
    if (ci) ci.style.animationPlayState = 'running';
  });
}

/* ── Variant picker ── */
const variantCards = document.querySelectorAll('.variant-card');
const canGlow = document.querySelector('.can-glow');
const heroCanImg = document.getElementById('can-img');

const variantGlows = {
  classic:      'rgba(212,160,23,.4)',
  'sugar-free': 'rgba(0,200,255,.4)',
  red:          'rgba(255,34,68,.4)',
  tropical:     'rgba(0,230,118,.4)',
  coffee:       'rgba(139,94,60,.4)',
};

variantCards.forEach(card => {
  card.addEventListener('click', () => {
    variantCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    const glow = variantGlows[card.dataset.flavor];
    if (glow && canGlow) {
      canGlow.style.background = `radial-gradient(circle,${glow} 0%,transparent 70%)`;
    }

    if (heroCanImg && card.dataset.img) {
      if (heroCanImg.classList.contains('can-spin')) return;
      heroCanImg.classList.add('can-spin');
      setTimeout(() => {
        heroCanImg.src = card.dataset.img;
        heroCanImg.onerror = () => {
          heroCanImg.src = 'https://goldeneagle-ks.com/wp-content/uploads/2023/11/Golden-Eagle-250ml.png';
        };
      }, 410); // 50% of 820ms spin — can is invisible at 180°
      heroCanImg.addEventListener('animationend', () => {
        heroCanImg.classList.remove('can-spin');
        heroCanImg.style.animationPlayState = 'running';
      }, { once: true });
    }
  });
});

/* ── Intersection observer — ingredients ── */
const ingItems = document.querySelectorAll('.ingredient-item');
const ingObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || 0);
      setTimeout(() => {
        entry.target.style.transition = 'opacity .5s ease, transform .5s ease';
        entry.target.classList.add('visible');
      }, delay);
    }
  });
}, { threshold: 0.2 });
ingItems.forEach(i => ingObs.observe(i));

/* ── General scroll-reveal ── */
const reveals = document.querySelectorAll('.product-card, .review-card, .pillar, .contact-item');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const idx = parseInt(entry.target.dataset.index || 0);
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, idx * 80);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  revealObs.observe(el);
});

/* ── Reviews carousel ── */
const track = document.getElementById('reviews-track');
const dots  = document.querySelectorAll('.rev-dot');
const cards = document.querySelectorAll('.review-card');
let currentRev = 0;
const cardW = 364;

function goToReview(idx) {
  currentRev = Math.max(0, Math.min(idx, cards.length - 1));
  track.style.transform = `translateX(-${currentRev * cardW}px)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === currentRev));
}

document.getElementById('rev-prev').addEventListener('click', () => goToReview(currentRev - 1));
document.getElementById('rev-next').addEventListener('click', () => goToReview(currentRev + 1));
dots.forEach((d, i) => d.addEventListener('click', () => goToReview(i)));

let revTimer = setInterval(() => goToReview((currentRev + 1) % cards.length), 4500);
track.addEventListener('mouseenter', () => clearInterval(revTimer));
track.addEventListener('mouseleave', () => {
  revTimer = setInterval(() => goToReview((currentRev + 1) % cards.length), 4500);
});

/* ── Add-to-cart micro-animation ── */
document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const orig = this.textContent;
    const addedText = currentLang === 'sq' ? '✓ Shtuar!' : '✓ Added!';
    this.textContent = addedText;
    this.style.background = 'rgba(0,230,118,.2)';
    this.style.borderColor = '#00e676';
    this.style.color = '#00e676';
    setTimeout(() => {
      this.textContent = orig;
      this.style.background = '';
      this.style.borderColor = '';
      this.style.color = '';
    }, 1500);
  });
});

/* ── Contact form ── */
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.submit-btn span[data-i18n]');
  const successMsg = currentLang === 'sq' ? "⚡ Dërguar! Do ju kontaktojmë." : "⚡ Sent! We'll be in touch.";
  if (btn) btn.textContent = successMsg;
  this.querySelector('.submit-btn').style.background = 'linear-gradient(135deg,#00e676,#00b050)';
  setTimeout(() => {
    applyLang(currentLang);
    this.querySelector('.submit-btn').style.background = '';
    this.reset();
  }, 3000);
});

/* ── Smooth anchor scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Mobile nav toggle ── */
const navToggle = document.getElementById('nav-toggle');
const navLinksEl = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  const open = navLinksEl.style.display === 'flex';
  navLinksEl.style.display = open ? 'none' : 'flex';
  navLinksEl.style.flexDirection = 'column';
  navLinksEl.style.position = 'absolute';
  navLinksEl.style.top = '72px';
  navLinksEl.style.left = '0'; navLinksEl.style.right = '0';
  navLinksEl.style.background = 'rgba(8,8,8,.96)';
  navLinksEl.style.padding = '20px';
  navLinksEl.style.borderBottom = '1px solid rgba(212,160,23,.1)';
});

/* ── Parallax blobs ── */
window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  const b1 = document.querySelector('.blob-1');
  const b2 = document.querySelector('.blob-2');
  if (b1) b1.style.transform = `translate(${sy * 0.02}px, ${sy * 0.05}px)`;
  if (b2) b2.style.transform = `translate(${-sy * 0.02}px, ${-sy * 0.03}px)`;
});

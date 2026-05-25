/* ═══════════════════════════════════════════════
   GOLDEN EAGLE — script.js
   ═══════════════════════════════════════════════ */

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
let particles = [];

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

for (let i = 0; i < 120; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ── Hero can 3D tilt on mouse ── */
const canWrap = document.getElementById('hero-can-wrap');
const can3d   = document.getElementById('can-3d');
if (canWrap && can3d) {
  canWrap.addEventListener('mousemove', e => {
    const rect = canWrap.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width  / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    can3d.style.transform = `perspective(800px) rotateY(${dx * 18}deg) rotateX(${-dy * 12}deg)`;
  });
  canWrap.addEventListener('mouseleave', () => {
    can3d.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
  });
}

/* ── Variant picker ── */
const variantCards = document.querySelectorAll('.variant-card');
const canFace = document.querySelector('.can-face');
const canGlow = document.querySelector('.can-glow');

const variantStyles = {
  classic:    { bg: 'linear-gradient(160deg,#2a1e00,#0a0a0a 40%,#1a0f00)', glow: 'rgba(212,160,23,.35)', blob1: '#1a1200', blob2: '#1a1000' },
  'sugar-free': { bg: 'linear-gradient(160deg,#002a40,#0a0a0a 40%,#001a2a)', glow: 'rgba(0,200,255,.35)', blob1: '#001a2a', blob2: '#00111a' },
  red:        { bg: 'linear-gradient(160deg,#3a0010,#0a0a0a 40%,#2a0008)', glow: 'rgba(255,34,68,.35)',  blob1: '#1a0008', blob2: '#120005' },
  tropical:   { bg: 'linear-gradient(160deg,#003a18,#0a0a0a 40%,#001a0d)', glow: 'rgba(0,230,118,.35)', blob1: '#001a0a', blob2: '#00110a' },
  coffee:     { bg: 'linear-gradient(160deg,#2a1500,#0a0a0a 40%,#1a0d00)', glow: 'rgba(139,94,60,.35)', blob1: '#120800', blob2: '#0a0500' },
};

variantCards.forEach(card => {
  card.addEventListener('click', () => {
    variantCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    const flavor = card.dataset.flavor;
    const style = variantStyles[flavor];
    if (style && canFace) {
      canFace.style.background = style.bg;
      if (canGlow) canGlow.style.background = `radial-gradient(circle,${style.glow} 0%,transparent 70%)`;
    }
  });
});

/* ── Intersection observer for ingredient items ── */
const ingItems = document.querySelectorAll('.ingredient-item');
const ingObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
        entry.target.style.transition = `opacity .5s ease, transform .5s ease`;
      }, parseInt(delay));
    }
  });
}, { threshold: 0.2 });
ingItems.forEach(i => ingObs.observe(i));

/* ── General scroll-reveal ── */
const reveals = document.querySelectorAll('.product-card, .review-card, .pillar, .contact-item');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const idx = entry.target.dataset.index || 0;
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
const cardW = 364; // 340 + 24 gap

function goToReview(idx) {
  currentRev = Math.max(0, Math.min(idx, cards.length - 1));
  track.style.transform = `translateX(-${currentRev * cardW}px)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === currentRev));
}

document.getElementById('rev-prev').addEventListener('click', () => goToReview(currentRev - 1));
document.getElementById('rev-next').addEventListener('click', () => goToReview(currentRev + 1));
dots.forEach((d, i) => d.addEventListener('click', () => goToReview(i)));

// Auto-advance reviews
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
    this.textContent = '✓ Added!';
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
  const btn = this.querySelector('.submit-btn');
  btn.textContent = '⚡ Sent! We\'ll be in touch.';
  btn.style.background = 'linear-gradient(135deg,#00e676,#00b050)';
  setTimeout(() => {
    btn.textContent = 'Send Message ⚡';
    btn.style.background = '';
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
  navLinksEl.style.display = navLinksEl.style.display === 'flex' ? 'none' : 'flex';
  navLinksEl.style.flexDirection = 'column';
  navLinksEl.style.position = 'absolute';
  navLinksEl.style.top = '72px';
  navLinksEl.style.left = '0'; navLinksEl.style.right = '0';
  navLinksEl.style.background = 'rgba(8,8,8,.96)';
  navLinksEl.style.padding = '20px';
  navLinksEl.style.borderBottom = '1px solid rgba(212,160,23,.1)';
  navLinksEl.style.borderRadius = '0';
});

/* ── Parallax blobs on hero ── */
window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  const b1 = document.querySelector('.blob-1');
  const b2 = document.querySelector('.blob-2');
  if (b1) b1.style.transform = `scale(1) translate(${sy * 0.02}px, ${sy * 0.05}px)`;
  if (b2) b2.style.transform = `scale(1) translate(${-sy * 0.02}px, ${-sy * 0.03}px)`;
});


const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', (event) => {
  const target = document.querySelector(link.getAttribute('href'));
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({behavior: reduced ? 'auto' : 'smooth', block: 'start'});
}));
const reveals = document.querySelectorAll('.reveal');
if (!reduced && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    obs.unobserve(entry.target);
  }), {threshold: 0.12});
  reveals.forEach((item) => observer.observe(item));
} else reveals.forEach((item) => item.classList.add('is-visible'));
if (!reduced) {
  document.querySelectorAll('[data-spotlight-grid]').forEach((grid) => grid.addEventListener('pointermove', (event) => {
    grid.querySelectorAll('.spotlight-card').forEach((card) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--x', `${event.clientX-r.left}px`);
      card.style.setProperty('--y', `${event.clientY-r.top}px`);
    });
  }, {passive:true}));
  document.querySelectorAll('[data-tilt]').forEach((stage) => {
    const card = stage.querySelector('.hero-card, .quote-card') || stage;
    stage.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse') return;
      const r = stage.getBoundingClientRect(), x = (event.clientX-r.left)/r.width-.5, y = (event.clientY-r.top)/r.height-.5;
      const base = card.classList.contains('hero-card') ? 'rotate(-4deg)' : '';
      card.style.transform = `${base} rotateX(${y*-5}deg) rotateY(${x*7}deg) translateZ(30px)`;
    }, {passive:true});
    stage.addEventListener('pointerleave', () => { card.style.transform = card.classList.contains('hero-card') ? 'rotate(-4deg) translateZ(30px)' : ''; });
  });
  document.querySelectorAll('.magnetic').forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse') return;
      const r = button.getBoundingClientRect(), x = (event.clientX-r.left-r.width/2)*.08, y = (event.clientY-r.top-r.height/2)*.08;
      button.style.transform = `translate(${x}px,${y}px)`;
    }, {passive:true});
    button.addEventListener('pointerleave', () => { button.style.transform = ''; });
  });
}

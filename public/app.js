const revealTargets = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  }
}, { threshold: 0.18 });

revealTargets.forEach((el) => io.observe(el));

const layers = document.querySelectorAll('.parallax-layer');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  layers.forEach((layer, index) => {
    const depth = index === 0 ? 0.03 : 0.06;
    layer.style.transform = `translateY(${y * depth}px)`;
  });
});

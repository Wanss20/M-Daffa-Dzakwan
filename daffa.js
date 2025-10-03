// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
hamburger.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Scroll to Contact section
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Animasi fade-in saat discroll (untuk section)
const animatedEls = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .pop-in');
window.addEventListener('scroll', () => {
  animatedEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.animationPlayState = 'running';
    }
  });
});

// Language switch (dummy, bisa dikembangkan)
document.querySelectorAll('.lang').forEach(langBtn =>
  langBtn.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelectorAll('.lang').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    // Bisa tambahkan logic untuk mengganti isi web
  })
);

// Close menu on nav click (mobile)
document.querySelectorAll('.nav-list a').forEach(link =>
  link.addEventListener('click', () => navList.classList.remove('open'))
);

// Optional: Animate tech cards on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tech-card, .achievement-card').forEach((el, i) => {
    el.style.animationDelay = `${0.2 + i * 0.15}s`;
    el.style.animationPlayState = 'running';
  });
});
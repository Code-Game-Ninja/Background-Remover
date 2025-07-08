// effects.js
// GSAP and anime.js effects

document.addEventListener('DOMContentLoaded', () => {
  // GSAP animated text
  gsap.from('#main-title', {
    duration: 1.2,
    y: -60,
    opacity: 0,
    ease: 'bounce.out'
  });
  gsap.from('#about-title', {
    duration: 1.2,
    x: -80,
    opacity: 0,
    delay: 0.5,
    ease: 'power3.out'
  });

  // anime.js smooth scroll for nav links
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Get the Y position relative to the document
        const rect = target.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // Offset for nav (if needed, adjust as necessary)
        const offset = 16;
        const targetY = rect.top + scrollTop - offset;
        anime({
          targets: [document.scrollingElement || document.documentElement, document.body],
          scrollTop: targetY,
          duration: 900,
          easing: 'easeInOutQuad',
          update: anim => {
            window.scrollTo(0, anim.animations[0].currentValue);
          }
        });
      }
    });
  });

  // Contact form animated feedback
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      anime({
        targets: contactForm,
        scale: [1, 1.04, 1],
        duration: 400,
        easing: 'easeInOutSine'
      });
      setTimeout(() => {
        alert('Thank you for reaching out! We will get back to you soon.');
        contactForm.reset();
      }, 420);
    });
  }
}); 
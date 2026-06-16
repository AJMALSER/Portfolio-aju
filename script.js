// 1. Mobile Hamburger Menu Logic
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Animate hamburger lines
  hamburger.classList.toggle('toggle');
});

// Close menu when a link is clicked
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// 2. Typed.js for Hero Section
new Typed("#typing", {
  strings: [
    "Full-Stack Developer",
    "E-Commerce Expert",
    "UI/UX Enthusiast",
    "Problem Solver"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1500,
  loop: true
});

// 3. Initial Hero Animations using GSAP
gsap.from(".animate-fade", { opacity: 0, scale: 0.8, duration: 1, ease: "power2.out", delay: 0.2 });
gsap.from(".animate-up", { opacity: 0, y: 30, duration: 1, ease: "power2.out", delay: 0.4 });
gsap.from(".animate-up-delay", { opacity: 0, y: 30, duration: 1, ease: "power2.out", delay: 0.6 });
gsap.from(".animate-up-delay-2", { opacity: 0, y: 30, duration: 1, ease: "power2.out", delay: 0.8 });
gsap.from(".animate-up-delay-3", { opacity: 0, y: 30, duration: 1, ease: "power2.out", delay: 1 });

// 4. Scroll Animations for Cards using Intersection Observer (Mobile Friendly)
const scrollElements = document.querySelectorAll(".scroll-anim");

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.fromTo(entry.target, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
      scrollObserver.unobserve(entry.target); // Animate only once
    }
  });
}, { threshold: 0.1 });

scrollElements.forEach((el) => scrollObserver.observe(el));

// 5. High-Level Text Fade Animation for "About Me"
const textElement = document.querySelector('.premium-fade p');

if (textElement) {
  const words = textElement.innerText.split(' ');
  textElement.innerHTML = '';

  words.forEach(word => {
    const span = document.createElement('span');
    span.className = 'word';
    
    // Highlight name dynamically
    if(word.includes('Muhammad') || word.includes('Ajmal')) {
       span.classList.add('highlight');
    }
    
    span.innerHTML = word + '&nbsp;';
    textElement.appendChild(span);
  });

  const textFadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to('.word', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.02, // Fast, smooth stagger for mobile
          ease: "power2.out"
        });
        textFadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  textFadeObserver.observe(document.querySelector('.about-panel'));
}

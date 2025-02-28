// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from(".hero h1", {
  opacity: 0,
  y: -50,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from(".hero p", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power3.out",
});

gsap.from(".hero .subtext", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 1,
  ease: "power3.out",
});

gsap.from(".cta-button", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 1.5,
  ease: "power3.out",
});

// About Section Animation
gsap.from(".about h2", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
  opacity: 0,
  y: -50,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from(".about p", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power3.out",
});

// Services Section Animation
gsap.from(".service-cards .card", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1.5,
  stagger: 0.3,
  ease: "power3.out",
});

// Interactive Button
document.querySelector('.cta-button').addEventListener('click', () => {
  alert('Welcome to Programming Communities! Let’s elevate your digital presence together.');
});
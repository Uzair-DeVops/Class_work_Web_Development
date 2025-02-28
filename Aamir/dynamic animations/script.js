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

// Courses Section Animation
gsap.from(".course-cards .card", {
  scrollTrigger: {
    trigger: ".courses",
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
  alert('Welcome to Programming Communities! Explore our free courses and enhance your skills.');
});
// Canvas Text Animation Logic
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const text = "Programming Communities";
const particles = [];
const particleCount = 2000;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1;
    this.weight = Math.random() * 1 + 1;
    this.directionX = Math.random() * 2 - 1;
  }

  update() {
    if (this.y > canvas.height) {
      this.y = 0 - this.size;
      this.weight = Math.random() * 1 + 1;
      this.x = Math.random() * canvas.width * 1.3;
    }
    this.weight += 0.01;
    this.y += this.weight;
    this.x += this.directionX;
  }

  draw() {
    ctx.fillStyle = "#ff6f61";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

function init() {
  particles.length = 0;
  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particles.push(new Particle(x, y));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

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

// Scroll to Courses Section
function scrollToCourses() {
  document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
}
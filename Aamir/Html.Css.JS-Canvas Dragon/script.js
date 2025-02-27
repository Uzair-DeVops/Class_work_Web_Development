// Dragon Animation Logic
const screen = document.getElementById("screen"),
  xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink";

const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
window.addEventListener("pointermove", (e) => {
  pointer.x = e.clientX;
  pointer.y = e.clientY;
  rad = 0;
});

let width = window.innerWidth,
  height = window.innerHeight;
window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
});

const N = 40;
const elems = [];
for (let i = 0; i < N; i++) {
  elems[i] = { use: null, x: width / 2, y: height / 2 };
}

const prepend = (use, i) => {
  const elem = document.createElementNS(xmlns, "use");
  elems[i].use = elem;
  elem.setAttributeNS(xlinkns, "xlink:href", "#" + use);
  screen.prepend(elem);
};

for (let i = 1; i < N; i++) {
  if (i === 1) prepend("Cabeza", i);
  else if (i === 8 || i === 14) prepend("Aletas", i);
  else prepend("Espina", i);
}

let rad = 0,
  radm = Math.min(pointer.x, pointer.y) - 20,
  frm = Math.random();

const run = () => {
  requestAnimationFrame(run);

  let e = elems[0];
  const ax = (Math.cos(3 * frm) * rad * width) / height,
    ay = (Math.sin(4 * frm) * rad * height) / width;
  e.x += (ax + pointer.x - e.x) / 10;
  e.y += (ay + pointer.y - e.y) / 10;

  for (let i = 1; i < N; i++) {
    let e = elems[i],
      ep = elems[i - 1],
      a = Math.atan2(e.y - ep.y, e.x - ep.x);
    e.x += (ep.x - e.x + (Math.cos(a) * (100 - i)) / 5) / 4;
    e.y += (ep.y - e.y + (Math.sin(a) * (100 - i)) / 5) / 4;

    const s = (162 + 4 * (1 - i)) / 50;
    e.use.setAttributeNS(
      null,
      "transform",
      `translate(${(ep.x + e.x) / 2},${(ep.y + e.y) / 2}) rotate(${
        (180 / Math.PI) * a
      }) translate(0,0) scale(${s},${s})`
    );
  }

  if (rad < radm) rad++;
  frm += 0.003;

  if (rad > 60) {
    pointer.x += (width / 2 - pointer.x) * 0.05;
    pointer.y += (height / 2 - pointer.y) * 0.05;
  }
};

run();

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

// Scroll to Courses Section
function scrollToCourses() {
  document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
}
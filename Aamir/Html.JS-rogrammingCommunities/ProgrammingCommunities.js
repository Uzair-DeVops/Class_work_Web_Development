"use strict";
const screen = document.getElementById("screen"),
	xmlns = "http://www.w3.org/2000/svg",
	xlinkns = "http://www.w3.org/1999/xlink";

// Pointer and resize logic
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

// Create text elements
const N = 40; // Number of text segments
const elems = [];
for (let i = 0; i < N; i++) {
	elems[i] = { use: null, x: width / 2, y: height / 2 };
}

// Append text elements to the screen
const prepend = (use, i) => {
	const elem = document.createElementNS(xmlns, "use");
	elems[i].use = elem;
	elem.setAttributeNS(xlinkns, "xlink:href", "#" + use);
	screen.prepend(elem);
};

for (let i = 1; i < N; i++) {
	prepend("Text", i); // Use the "Text" group for all segments
}

// Animation logic
let rad = 0,
	radm = Math.min(pointer.x, pointer.y) - 20,
	frm = Math.random();

const run = () => {
	requestAnimationFrame(run);

	// Move the first segment (head) towards the pointer
	let e = elems[0];
	const ax = (Math.cos(3 * frm) * rad * width) / height,
		ay = (Math.sin(4 * frm) * rad * height) / width;
	e.x += (ax + pointer.x - e.x) / 10;
	e.y += (ay + pointer.y - e.y) / 10;

	// Move the rest of the segments
	for (let i = 1; i < N; i++) {
		let e = elems[i],
			ep = elems[i - 1],
			a = Math.atan2(e.y - ep.y, e.x - ep.x);
		e.x += (ep.x - e.x + (Math.cos(a) * (100 - i)) / 5) / 4;
		e.y += (ep.y - e.y + (Math.sin(a) * (100 - i)) / 5) / 4;

		// Apply transformation to each segment
		const s = (162 + 4 * (1 - i)) / 50;
		e.use.setAttributeNS(
			null,
			"transform",
			`translate(${(ep.x + e.x) / 2},${(ep.y + e.y) / 2}) rotate(${
				(180 / Math.PI) * a
			}) translate(0,0) scale(${s},${s})`
		);
	}

	// Increase radius and frame
	if (rad < radm) rad++;
	frm += 0.003;

	// Reset pointer to center if radius is large
	if (rad > 60) {
		pointer.x += (width / 2 - pointer.x) * 0.05;
		pointer.y += (height / 2 - pointer.y) * 0.05;
	}
};

run();
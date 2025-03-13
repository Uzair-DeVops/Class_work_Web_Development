let swiper;

document.addEventListener("DOMContentLoaded", function () {
  // Ensure Swiper library is loaded and element exists
  const swiperEl = document.querySelector('.swiper');
  if (!swiperEl) {
    console.error("Swiper container not found!");
    return;
  }
  if (typeof Swiper === "undefined") {
    console.error("Swiper.js is not loaded!");
    return;
  }

  // Initialize Swiper with cube effect and additional options
  swiper = new Swiper('.swiper', {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    mousewheel: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    }
  });

  // Optional: Log slide changes using Swiper's event listener
  swiper.on('slideChange', function () {
    console.log("Navigated to slide:", swiper.activeIndex);
  });
});

// Navigation function for sidebar links
function Navigate(index) {
  const links = document.querySelectorAll(".Links li");
  if (index >= 0 && index < links.length) {
    links.forEach(item => item.classList.remove("activeLink"));
    links[index].classList.add("activeLink");
    swiper.slideTo(index, 500, false);
  } else {
    console.warn("Invalid navigation index:", index);
  }
}

// Dark/Light Mode Toggle
function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById("toggle-dark-mode");
    body.classList.toggle("dark-mode");
  
    // Toggle between moon and sun icons
    if (body.classList.contains("dark-mode")) {
      button.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
    } else {
      button.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
    }
  }
  
  // Add event listener to the dark mode toggle button
  document.getElementById("toggle-dark-mode").addEventListener("click", toggleDarkMode);
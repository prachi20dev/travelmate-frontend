// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000); // loader stays visible for 2 seconds
});

// Dark/Light Mode
const toggle = document.getElementById("modeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Carousel
let currentSlide = 0;
function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}
showSlide(0);

// Tab Switcher
function switchTab(tabId) {
  document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
}
switchTab("budget");

// Counter Animation
const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Hide loader when content is fully loaded
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

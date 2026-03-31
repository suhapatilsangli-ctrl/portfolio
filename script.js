// Dark mode toggle
document.getElementById("toggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Scroll animation
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

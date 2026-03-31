// DARK MODE
document.getElementById("toggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// SCROLL ANIMATION
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// TYPING EFFECT
const text = ["Java Developer", "Web Developer", "BCS Student"];
let i = 0, j = 0;
let currentText = "", isDeleting = false;

function type() {
  currentText = text[i];

  if (!isDeleting) {
    j++;
  } else {
    j--;
  }

  document.getElementById("typing").innerHTML = currentText.substring(0, j);

  if (j == currentText.length) isDeleting = true;
  if (j == 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

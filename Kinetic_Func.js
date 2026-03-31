// Utility animation function (GSAP-like)
function animate(element, delay = 0) {
  setTimeout(() => {
    element.style.transition = "all 1s ease";
    element.style.opacity = 1;
    element.style.transform = "translateY(0)";
  }, delay);
}

// Hero animation
window.onload = () => {
  animate(document.querySelector(".title"), 200);
  animate(document.querySelector(".subtitle"), 600);
};

// Scroll animation (like GSAP ScrollTrigger)
const cards = document.querySelectorAll(".card");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach((card, index) => {
    const boxTop = card.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, index * 200); // stagger effect
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("is-open");
  });

  // Close menu when a link is clicked (mobile)
  navMenu.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "a") {
      navMenu.classList.remove("is-open");
    }
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

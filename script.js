// Javascript for hover cards

document.getElementById("hover_cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}

// hover card ends here



// Navigation function indicator


const sections = document.querySelectorAll(".full-page");
const dots = document.querySelectorAll(".indicator_circle");
const navselect = document.querySelectorAll(".nav-btn");

// Intersection Observer to detect visible section
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let index = [...sections].indexOf(entry.target);
        updateActiveSection(index);
      }
    });
  },
  { threshold: 0.6 } // Detect when at least 60% of a section is visible
);

sections.forEach((section) => observer.observe(section));

function updateActiveSection(index) {
  sections.forEach((section, i) => {
    section.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  navselect.forEach((nav, i) => {
    nav.classList.toggle("active-nav", i === index);
  });

}

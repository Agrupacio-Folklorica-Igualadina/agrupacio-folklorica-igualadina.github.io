document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Navigation menu toggle and active link logic
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // Lazy loading for images
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      menuToggle &&
      navLinks &&
      !menuToggle.contains(event.target) &&
      !navLinks.contains(event.target)
    ) {
      navLinks.classList.remove("active");
    }
  });

  // Close menu when clicking on a link (mobile)
  if (navLinks) {
    const navLinksItems = navLinks.querySelectorAll("a");
    navLinksItems.forEach((link) => {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
      });
    });

    // Add active class to current page
    const currentPath = window.location.pathname;
    navLinksItems.forEach((link) => {
      if (
        link.getAttribute("href") === currentPath ||
        (currentPath === "/" && link.getAttribute("href") === "/")
      ) {
        link.classList.add("active");
      }
    });
  }
});
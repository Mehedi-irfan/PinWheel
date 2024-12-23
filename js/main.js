// toggle button
const navMenu = document.getElementById("nav_menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburg = document.getElementById("hamburg");

hamburg.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburg.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburg.classList.toggle("ri-close-large-line");
  });
});

// swiper
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
    // Add responsive breakpoints
    breakpoints: {
      // When the screen width is >= 1024px (large devices)
      1024: {
        slidesPerView: 3, // Show 4 slides
        spaceBetween: 40, // Space between slides in px
      },
      // When the screen width is >= 768px (medium devices)
      768: {
        slidesPerView: 2, // Show 2 slides
        spaceBetween: 15, // Space between slides in px
      },
      // When the screen width is < 768px (small devices)
      0: {
        slidesPerView: 1, // Show 1 slide
        spaceBetween: 10, // Space between slides in px
      },
    },
  });
});

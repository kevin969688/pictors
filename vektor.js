// Dark Mode
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;
  const navbarLinks = document.querySelectorAll(".nav-link");

  function enableDarkMode() {
    body.classList.add("dark-mode");
    body.style.backgroundColor = "#333";
    body.style.color = "#fff";
    navbarLinks.forEach((link) => {
      link.style.color = "#fff";
    });
    darkModeToggle.checked = true;
  }

  function disableDarkMode() {
    body.classList.remove("dark-mode");
    body.style.backgroundColor = "#fff";
    body.style.color = "#333";
    navbarLinks.forEach((link) => {
      link.style.color = "#333";
    });
    darkModeToggle.checked = false;
  }

  if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
  }

  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      enableDarkMode();

      localStorage.setItem("darkMode", "enabled");
    } else {
      disableDarkMode();
      localStorage.setItem("darkMode", "disabled");
    }
  });
});

// Lesson
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

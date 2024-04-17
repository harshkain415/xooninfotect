const loader = () => {
  const num = document.querySelector("#number");

  document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    let interval = setInterval(() => {
      if (count <= 100) {
        num.innerHTML = count + "%";
        count++;
      } else {
        clearInterval(interval);
        document.querySelector("#loader").style.transform = "translateY(-100%)";
        setTimeout(() => {
          document.querySelector("#loader").style.display = "none";
          console.log("kain");
        }, 500);
      }
    }, 20);
  });
};

// loader();
const navbar = () =>{

  var getHubergerIcon = document.getElementById("hamburger-menu");
  var getHubergerCrossIcon = document.getElementById("hamburger-cross");
  var getMobileMenu = document.getElementById("mobile-menu");

  getHubergerIcon.addEventListener("click", function () {
    console.log("hello");
    getMobileMenu.style.display = "flex";
    setTimeout(function () {
      getMobileMenu.style.transform = "translateX(0%)";
    }, 50);
  });

  getHubergerCrossIcon.addEventListener("click", function () {
    console.log("hello");
    getMobileMenu.style.transform = "translateX(-100%)";
    setTimeout(function () {
      getMobileMenu.style.display = "none";
    }, 300);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 770) {
      getMobileMenu.style.display = "none";
    }
  });

}
navbar()


// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
// const swiper = new Swiper()
// const swipperJs = () =>{

// }
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelector('.slides');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let slideIndex = 0;
  const slideWidth = document.querySelector('.card').offsetWidth;

  function showSlides() {
      slides.style.transform = `translateX(-${(slideWidth * slideIndex) + 20}px)`;
  }

  function nextSlide() {
      if (slideIndex < slides.children.length - 2) {
          slideIndex++;
      } else {
          slideIndex = 0;
      }
      showSlides();
  }

  function prevSlide() {
      if (slideIndex > 0) {
          slideIndex--;
      } else {
          slideIndex = slides.children.length - 2;
      }
      showSlides();
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Responsive slide adjustment
  window.addEventListener('resize', function() {
      slideWidth = document.querySelector('.card').offsetWidth;
      showSlides();
  });

  // Auto slide change
  // setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as needed)
});

var menuBTn = document.querySelector("#menu-bar");
var navBar = document.querySelector(".navbar");

menuBTn.onclick = ()=> {
  menuBTn.classList.toggle("fa-times");
  navBar.classList.toggle("active");
}

window.onscroll = ()=> {
  menuBTn.classList.remove("fa-times");
  navBar.classList.remove("active");
}

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
   loop:true,
   autoplay: {
    delay:4000,
    disableOnInteraction: false,
   }
  });
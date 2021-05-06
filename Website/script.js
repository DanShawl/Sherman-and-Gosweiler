var swiper = new Swiper('.swiper-container', {
  // slidesPerView: 1.5,
  slidesPerView: 2,
  // slidesPerView: 1.35,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper2 = new Swiper('.swiper-container-new', {
  // slidesPerView: 1.5,
  slidesPerView: 1.5,
  // slidesPerView: 1.35,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

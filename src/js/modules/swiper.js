export default function initSwiper() {
  var swiper = new Swiper('.mySwiper', {
    navigation: {
      nextEl: '.swiper-button-next-ph',
      prevEl: '.swiper-button-prev-ph',
    },
  });
}

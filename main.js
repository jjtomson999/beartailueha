// const images = document.querySelectorAll('.img_cmt img');

// for(let i=0; i<images.length; i++){
//   const keyframes={
//     opacity:[0,1]
//   };
//   const options = {
//     duration:2000,
//     delay:i*1000,
//     fill:'forwards',
//   };
//   images[i].animate(keyframes,options)
// }

// const swiper = new Swiper(".swiper", {
//   // ページネーションが必要なら追加
//   pagination: {
//     el: ".swiper-pagination"
//   },
//   // ナビボタンが必要なら追加
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   }
// });
const mySwiper = new Swiper(".swiper", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  // スライドの表示枚数：600px未満の場合
  slidesPerView: 1,
  breakpoints: {
    // スライドの表示枚数：600px以上の場合
    600: {
      slidesPerView: 2,
    },
    // スライドの表示枚数：768px以上の場合
    768: {
      slidesPerView: 3,
    },
    // スライドの表示枚数：1025px以上の場合
    1025: {
      slidesPerView: 1,
    },
  },
  // 自動スライド
  autoplay: {
      delay: 2000,
     
      stopOnLastSlide: false,
      disableOnInteraction: true,
      reverseDirection: false
  },
  
  loop: true,
  autoHeight: true ,
  speed:3000
});
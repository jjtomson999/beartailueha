
const mySwiper = new Swiper(".swiper", {
  pagination:{
    el:".swiper-pagination",
    clickable:true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
 
      prevEl: ".swiper-button-prev",
  },
  // スライドの表示枚数：600px未満の場合
  slidesPerView: 1,
  breakpoints: {
    // スライドの表示枚数：600px以上の場合
    800: {
      slidesPerView:2,
    },

    // スライドの表示枚数：768px以上の場合
   
    // スライドの表示枚数：1025px以上の場合
    1025: {
      slidesPerView: 3,
    },
  },
  // 自動スライド
 
  
  loop: true,
  autoHeight: true ,
  speed:1000,
  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    reverseDirection: false
}

});




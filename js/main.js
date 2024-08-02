const searchBtn = document.querySelector('.search');
const searchInput = document.querySelector('input');

searchBtn.addEventListener('click', () => {
  searchInput.focus();
});

searchInput.addEventListener('focus', () => {
  searchBtn.classList.add('focused');
  searchInput.setAttribute('placeholder', '통합검색');
});
searchInput.addEventListener('blur', () => {
  searchBtn.classList.remove('focused');
  searchInput.setAttribute('placeholder', '');
});

const badgesEl = document.querySelector('.badges');
window.addEventListener(
  'scroll',
  _.throttle(() => {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      gsap.to(badgesEl, 0.6, {
        opacity: 0,
      });
    } else {
      gsap.to(badgesEl, 0.6, {
        opacity: 1,
      });
    }
  }),
  300
);

const fadeInEls = document.querySelectorAll('.fade-in');
fadeInEls.forEach((element, index) => {
  gsap.to(element, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});
// fadeInEls.forEach((element, index) => {
//   gsap.to(element, {
//     delay: (index + 1) * 0.7,
//     opacity: 1,
//     duration: 1,
//   });
// });
// const fadeInMove = () => {
//   console.log('실행');
//   gsap.to('.fade-in', {
//     delay: 1,
//     stagger: 0.7,
//     opacity: 1,
//     duration: 1,
//   });
// };
// fadeInMove();

new Swiper('.notice-line .swiper', {
  // Optional parameters
  direction: 'vertical', // 수직방향, default는 수평방향
  autoplay: true, // 자동재생
  loop: true, // 반복재생여부
});
new Swiper('.promotion .swiper', {
  // Optional parameters
  autoplay: true, // 자동재생
  loop: true, // 반복재생여부
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  autoplay: {
    // 자동재생
    delay: 3000, // 3초 후 시작
  },
});

const promotionHide = document.querySelector('.promotion-toggle');
const promotionEl = document.querySelector('.promotion');
let isPromotion = false;
promotionHide.addEventListener('click', () => {
  isPromotion = !isPromotion;
  if (isPromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});

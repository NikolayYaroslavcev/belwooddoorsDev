"use strict";

var titles = document.querySelectorAll('.accordion-title');
var contents = document.querySelectorAll('.accordion-content');
titles.forEach(function (item) {
  return item.addEventListener('click', function () {
    var activeContent = document.querySelector('#' + item.dataset.tab);
    if (activeContent.classList.contains('active')) {
      activeContent.classList.remove('active');
      item.classList.remove('active');
      activeContent.style.maxHeight = 0;
    } else {
      contents.forEach(function (element) {
        element.classList.remove('active');
        element.style.maxHeight = 0;
      });
      titles.forEach(function (element) {
        return element.classList.remove('active');
      });
      item.classList.add('active');
      activeContent.classList.add('active');
      activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
  });
});

// slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  rewind: true,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    769: {
      slidesPerView: 3
    },
    1600: {
      slidesPerView: 6
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
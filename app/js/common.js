// Slider
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // spaceBetween: 30,
    autplay: false,
    cssMode: false,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    mousewheel: false,
    keyboard: true,
});

// Feedback slider
let swiperFeedback = new Swiper(".feedback__wrapper", {
  slidesPerView: 2, 
  spaceBetween: 30,
  autplay: false,
  cssMode: false,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiperWorks = new Swiper(".works-view", {
  slidesPerView: 4,
  grid: {
    rows: 4
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  }
});

// Iframe-player

function findVideos() {
  let videos = document.querySelector('.video');

  // for (let i = 0; i < videos.length; i++) {
  //     setupVideo(videos[i]);
  // }
}

function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let media = video.querySelector('.video__media');
  let button = video.querySelector('.video__button');
  let id = parseMediaURL(media);

  video.addEventListener('click', () => {
      let iframe = createIframe(id);

      link.remove();
      button.remove();
      video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();


// add class remove class

let namedListItem = document.querySelectorAll(".named-list__item");
let serviceItem   = document.querySelectorAll(".service__item");

namedListItem.forEach(function (item) {
  item.addEventListener("click", function () {
    namedListItem.forEach(function (item) {
      item.classList.remove("active")
    });
    item.classList.add("active")
  });
});

serviceItem.forEach(function (item) {
  item.addEventListener("click", function () {
    serviceItem.forEach(function (item) {
      item.classList.remove("active")
    });
    item.classList.add("active")
  });
});
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
    clickable: true,
  },
  mousewheel: false,
  keyboard: true,
});

// Feedback slider
let swiperFeedback = new Swiper(".feedback__wrapper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autplay: false,
  cssMode: false,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    991: {
      slidesPerView: 2
    }
  }
});

let swiperWorks = new Swiper(".works-view", {
  slidesPerView: 4,
  grid: {
    rows: 4,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

// Iframe-player

function findVideos() {
  let videos = document.querySelector(".video");

  // for (let i = 0; i < videos.length; i++) {
  //     setupVideo(videos[i]);
  // }
}

function setupVideo(video) {
  let link = video.querySelector(".video__link");
  let media = video.querySelector(".video__media");
  let button = video.querySelector(".video__button");
  let id = parseMediaURL(media);

  video.addEventListener("click", () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute("href");
  video.classList.add("video--enabled");
}

function parseMediaURL(media) {
  let regexp =
    /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement("iframe");

  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("video__media");

  return iframe;
}

function generateURL(id) {
  let query = "?rel=0&showinfo=0&autoplay=1";

  return "https://www.youtube.com/embed/" + id + query;
}

findVideos();

// add class remove class

(function () {
  // let namedListItem = document.querySelectorAll(".named-list__item");
  let serviceItem = document.querySelectorAll(".service__item");

  // namedListItem.forEach(function (item) {
  //   item.addEventListener("click", function () {
  //     namedListItem.forEach(function (item) {
  //       item.classList.remove("active");
  //     });
  //     item.classList.add("active");
  //   });
  // });

  serviceItem.forEach(function (item) {
    item.addEventListener("click", function () {
      serviceItem.forEach(function (item) {
        item.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
  
})();

(function () {
  const closeBtn = document.querySelector("#close-btn");
  const menuItemOpen = document.querySelectorAll(".menu-item-open");
  const popupPage = document.querySelector(".popup-page");
  const navOverlay = document.querySelector(".nav-overlay");
  const headerPageHamburger = document.querySelector(".header-page__hamburger");
  const headerPageHamburgerActive = document.querySelector(".header-page__hamburger .active");
  const mobileDevice = document.querySelector(".mobile-device");
  const headerPage = document.querySelector(".header-page");

  for (let i = 0; i < menuItemOpen.length; i++) {
    menuItemOpen[i].onclick = function () {
      popupPage.classList.add("open");
      navOverlay.style = "display: block";
    };
  }

  navOverlay.onclick = function () {
    popupPage.classList.remove("open");
    navOverlay.style = "display: none";
    mobileDevice.classList.remove("active");
    headerPageHamburger.classList.remove("active");
  };

  closeBtn.onclick = function () {
    popupPage.classList.remove("open");
    navOverlay.style = "display: none";
  };

  headerPageHamburger.addEventListener("click", function() {
    document.body.style.overflowY = "hidden";
    document.body.style.height = "100%";
    this.classList.toggle("active");
    mobileDevice.classList.toggle("active");
    navOverlay.style = "display: none";
    headerPage.style = "background: #fff; z-index: 30;";

    if(this.classList.contains("active")) {
      navOverlay.style = "display: block";
    }
  });

})();

(function () {

  const elem = document.querySelector('.works-view__inner');
  const iso = new Isotope( elem, {

itemSelector: '.works-view__item',
filter: ".kitchen"
});

  const controlls = document.querySelectorAll(".named-list__item");
  const activeClass = "active";

  controlls.forEach(function(control) {
      
      control.addEventListener("click", function(e) {
          e.preventDefault();

          const filterName = control.getAttribute("data-filter");

          controlls.forEach(function(link) {
              link.closest(".named-list__item").classList.remove(activeClass);
          })

          control.closest(".named-list__item").classList.add(activeClass);

          iso.arrange({
              filter: `.${filterName}`
          })
      });
      
  });

}());
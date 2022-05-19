// Slider
(function () {
  // let swiper = new Swiper(".mySwiper", {
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });

  var swiper = new Swiper(".mySwiper", {
    cssMode: false,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: false,
    keyboard: false,
  });
})();

(function() {

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

})();

(function () {
  let swiperWorks = new Swiper(".works-view", {
    slidesPerView: 4,
    grid: {
      rows: 3,
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
})();

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
 
    try {

      const closeBtn = document.querySelectorAll(".popu-page__close");
      const menuItemOpen = document.querySelectorAll(".menu-item-open");
      const popupPage = document.querySelector(".popup-page");
      const popupPageTitle = document.querySelector(".popup-page .title");
      const popupPageComment = document.querySelector(".popup-page.comment");
      const popupPageIdea = document.querySelector(".popup-page.idea");
      const addCommentBtn = document.querySelector(".add-comment");
      const navOverlay = document.querySelector(".nav-overlay");
      const headerPageHamburger = document.querySelector(".header-page__hamburger");
      const mobileDevice = document.querySelector(".mobile-device");
      const headerPage = document.querySelector(".header-page");
      const footerPageColBtn = document.querySelectorAll(".footer-page__col-btn");
      const bacCallBtn = document.querySelectorAll(".bac-call-btn");
    
      for (let i = 0; i < menuItemOpen.length; i++) {
        menuItemOpen[i].addEventListener("click", function(e) {
          e.preventDefault();
    
          popupPage.classList.add("open");
          navOverlay.style = "display: block; z-index: 35;";
        })
      }

      for (let i = 0; i < bacCallBtn.length; i++) {
        bacCallBtn[i].addEventListener("click", function(e) {
          e.preventDefault();
    
          popupPage.classList.add("open");
          navOverlay.style = "display: block; z-index: 35;";
          popupPageTitle.innerHTML = "Отправить заявку";
        })
      }

      for(let i = 0; i < footerPageColBtn.length; i++) {
        footerPageColBtn[i].addEventListener("click", function(e) {
          e.preventDefault();

          popupPageIdea.classList.add("open");
          navOverlay.style = "display: block;";
        })
      }
    
      navOverlay.onclick = function () {
        popupPage.classList.remove("open");
        navOverlay.style = "display: none";
        mobileDevice.classList.remove("active");
        headerPageHamburger.classList.remove("active");
        popupPageComment.classList.remove("open");
        popupPageIdea.classList.remove("open");
        popupPageTitle.innerHTML = "Оставить заявку";
      };
    
      for(let i = 0; i < closeBtn.length; i++) {
        closeBtn[i].onclick = function () {
          popupPage.classList.remove("open");
          navOverlay.style = "display: none";
          popupPageComment.classList.remove("open");
          popupPageIdea.classList.remove("open");
          popupPageTitle.innerHTML = "Оставить заявку";
        };
      }
    
      headerPageHamburger.addEventListener("click", function () {
        document.body.style.overflowY = "hidden";
        document.body.style.height = "100%";
        this.classList.toggle("active");
        mobileDevice.classList.toggle("active");
        navOverlay.style = "display: none";
        headerPage.style = "background: #fff; z-index: 30;";
    
        if (this.classList.contains("active")) {
          navOverlay.style = "display: block";
        }
      });
    
      addCommentBtn.addEventListener("click", function(e) {
    
        e.preventDefault();
    
        navOverlay.style = "display: block";
        popupPageComment.classList.add("open");
      })

    } catch(e) {e}

})();

// Isotope data-filter

(function () {

  try {
    const elem = document.querySelector(".works-view__inner:not(.swiper-wrapper)");
    const iso = new Isotope(elem, {
      itemSelector: ".works-view__item, .swiper-slide",
      filter: ".kitchen, .closet",
    });

    const controlls = document.querySelectorAll(".named-list__item");
    const worksTitleItem = document.querySelectorAll(".works-title__item");
    const activeClass = "active";

    controlls.forEach(function (control) {
      control.addEventListener("click", function (e) {
        // e.preventDefault();

        const filterName = control.getAttribute("data-filter");

        controlls.forEach(function (link) {
          link.closest(".named-list__item").classList.remove(activeClass);
        });

        control.closest(".named-list__item").classList.add(activeClass);

        iso.arrange({
          filter: `.${filterName}`,
        });
      });
    });

    worksTitleItem.forEach(function (item) {
      item.addEventListener("click", function () {
        const filterName = item.getAttribute("data-filter");

        worksTitleItem.forEach(function (title) {
          title.closest(".works-title__item").classList.remove(activeClass);
        });

        item.closest(".works-title__item").classList.add(activeClass);

        iso.arrange({
          filter: `.${filterName}`,
        });
      });
    });
  } catch(e) {}

})();


// all-comment 

(function() {

  try {
    const allCommentBtn = document.querySelector(".all-comment");
    allCommentBtn.onclick = function (){
      var className = informer.className;
      if( className.indexOf(' expanded') == -1 ){
          className += ' expanded';
      }
      
      informer.className = className;
      return false;
  }
  } catch(e) {}

})();

// wow-min js

new WOW().init();

// Bootstrap tab

$(document).ready(function(){
  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });
  $('.nav-tabs a').on('shown.bs.tab', function(event){
    var x = $(event.target).text();         // active tab
    var y = $(event.relatedTarget).text();  // previous tab
  });
});

// lightzoom

$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
     // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
   });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();

    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});
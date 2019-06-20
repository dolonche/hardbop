'use strict';
(function () {
  var scrollCards = document.querySelector('.scroll-cards');
  var scrollCardsItem = scrollCards.querySelectorAll('.scroll-cards__item');
  var windowHeight = $(window).width();
  var pageTitle = document.querySelector('.scroll-cards__item-title');
  var pageHeader = document.querySelector('.page-header__wrapper');
  var nav = document.querySelector('.main-nav');
  var navLink = nav.querySelectorAll('a');
  var navButton = nav.querySelector('.main-nav__toggle');
  var navList = nav.querySelector('.main-nav__list');
  var navListItem = nav.querySelectorAll('.main-nav__list-item a');
  var logo = document.querySelector('.scroll-cards__item-logo');
  var logoItem = logo.querySelector('svg');
  var logoTop = parseInt(window.getComputedStyle(logo, null).top);
  var logoLeft = parseInt(window.getComputedStyle(logo, null).left);
  var navLeft = parseInt(window.getComputedStyle(nav, null).left);
  var winWidth = $(window).width();
  if (winWidth < 1100) {
    for (var i = 0; i < navListItem.length; i++) {
      (function (i) {
        navListItem[i].addEventListener('click', function (e) {
          e.preventDefault();
          nav.classList.remove('main-nav--open');
          $('html,body').animate({
            scrollTop: $('.scroll-cards__item').eq(i + 1).offset().top
          }, 1000);
        })
      })(i);
    }
    $(window).on('scroll', function (e) {
      var currY = $(window).scrollTop();
      var windowH = $('body').height();
      var winWidth = $(window).width();
      var winHeight = $(window).height();
      var screenHeight = parseInt(window.getComputedStyle(scrollCardsItem[0], null).height);
      var percent = ((winWidth * (winHeight / winWidth) / (windowH - winHeight * (winWidth / winHeight)))).toFixed(4);
      var pos = Math.floor((windowH - winWidth * (winHeight / winWidth)) * percent * (winWidth / winHeight)) * 1 + 10;
      if (currY < screenHeight) {
        logoItem.style.transform = 'scale(' + (1 - (0.655 * (currY / screenHeight))) + ')';
        pageTitle.style.opacity = (-0.8 * (currY / screenHeight) + 0.8);
      }
    })
  }
  if (winWidth > 1100) {
    $.jInvertScroll(['.scroll-cards']);
    for (var i = 0; i < navLink.length; i++) {
      (function (i) {
        navLink[i].addEventListener('click', function (e) {
          e.preventDefault();
          var scrollPos = scrolok();
          $('html, body').animate({
            scrollTop: scrollPos * (i + 1)
          }, 1000);
        })
      })(i);
    }
    var scrolok = function () {
      var winWidth = $(window).width();
      var disclaimer = document.querySelector('.disclaimer');
      var currY = $(window).scrollTop();
      var winHeight = $(window).height();
      var windowH = $('body').height();
      // Current percentual position
      var percent = ((winWidth * (winHeight / winWidth) / (windowH - winHeight * (winWidth / winHeight)))).toFixed(4);
      var pos = Math.floor((windowH - winWidth * (winHeight / winWidth)) * percent * (winWidth / winHeight)) * 1;
      return pos;
    };
    $(window).on('scroll', function (e) {
      var currY = $(window).scrollTop();
      var windowH = $('body').height(); // value in pixels
      var winWidth = $(window).width();
      var winHeight = $(window).height();
      // Current percentual position 286
      var percent = ((winWidth * (winHeight / winWidth) / (windowH - winHeight * (winWidth / winHeight)))).toFixed(4);
      var pos = Math.floor((windowH - winWidth * (winHeight / winWidth)) * percent * (winWidth / winHeight)) * 1 + 10;
      if (currY < pos) {
        logo.style.top = (-(logoTop * (currY / pos)) + logoTop + 52 * (currY / pos) + 'px');
        logo.style.left = (-(logoLeft * (currY / pos)) + logoLeft + 158 * (currY / pos) + 'px');
        logoItem.style.transform = 'scale(' + (-1 * (currY / pos) + 1 + 0.355 * (currY / pos)) + ')';
        nav.style.transform = 'translateX(' + (-(40 * (currY / pos)) + 344 * (currY / pos)) + 'px)';
        pageTitle.style.opacity = (-0.8 * (currY / pos) + 0.8);
        logo.style.width = 'auto';
        logo.style.cursor = 'default';
      }
      if (currY > pos - 15) {
        logo.style.cursor = 'pointer';
        logo.style.width = 175 + 'px';
        logo.style.left = 0 + 'px';
        logo.style.top = 52 + 'px';
        logoItem.style.transform = 'scale(' + 0.355 + ')';
        nav.style.transform = 'translateX(' + 304 + 'px)';
      }
    })
    logoItem.addEventListener('click', function () {
      var scrollPos = scrolok();
      var currY = $(window).scrollTop();
      if (currY > scrollPos - 15) {
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
      }
    })
    pageHeader.classList.add('page-header__wrapper--open');
    scrollCardsItem[0].classList.add('scroll-cards__item--open');
    $('.main-nav__list-item').tilt({
      scale: 1.2
    })
    $('.page-header__mail').tilt({
      scale: 1.2
    })
    $('.scroll-cards__item-inner-develop-cards-item-img').tilt({
      scale: 1.2
    })
  }
  navButton.addEventListener('click', function () {
    if (nav.classList.contains('main-nav--open')) {
      nav.classList.remove('main-nav--open');
    } else {
      nav.classList.add('main-nav--open');
    }
  })
})();
'use strict';
var scene = document.getElementById('parallax');
var scrollCards = document.querySelector('.scroll-cards');
var disclaimer = document.querySelector('.disclaimer');
var windowHeight = $(window).width();
var pageTitle = document.querySelector('.scroll-cards__item-title');
var nav = document.querySelector('.main-nav');
var navLink = nav.querySelectorAll('a');
var logo = document.querySelector('.scroll-cards__item-logo');
var logoItem = logo.querySelector('svg');
var logoTop = parseInt(window.getComputedStyle(logo, null).top);
var logoLeft = parseInt(window.getComputedStyle(logo, null).left);
var navLeft = parseInt(window.getComputedStyle(nav, null).left);
var winWidth = $(window).width();
if (winWidth < 1100) {
  disclaimer.classList.add('disclaimer--open');
}
if (winWidth > 1100) {
  $.jInvertScroll(['.scroll-cards']);
  $('.main-nav__list-item').tilt({
    scale: 1.2
  })
  $('.page-header__mail').tilt({
    scale: 1.2
  })
  $('.scroll-cards__item-inner-develop-cards-item-img').tilt({
    scale: 1.2
  })
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
    }
    if (currY > pos - 15) {
      logo.style.left = 158 + 'px';
      logo.style.top = 52 + 'px';
      logoItem.style.transform = 'scale(' + 0.355 + ')';
      nav.style.transform = 'translateX(' + 304 + 'px)'
    }
  })
}
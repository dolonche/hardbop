'use strict';
$.jInvertScroll(['.scroll-cards']);
var scene = document.getElementById('parallax');
var scrollCards = document.querySelector('.scroll-cards');
//var parallax = new Parallax(scene);
var scrollBtn = $('#scrolldown');
var windowHeight = $(window).width(); // value in pixels
var scrolok = function () {
  var currY = $(window).scrollTop();
  var windowH = $('body').height(); // value in pixels
  var winHeight = $(window).height();
  var winWidth = $(window).width();
  // Current percentual position
  var percent = ((winWidth * (winHeight / winWidth) / (windowH - winHeight * (winWidth / winHeight)))).toFixed(4);
  var pos = Math.floor((windowH - winWidth * (winHeight / winWidth)) * percent * (winWidth / winHeight)) * 1;
  console.log(pos);
  return pos;
};
var topa = scrolok();
console.log(top);
scrollBtn.click(function (e) {
  $('html, body').animate({
    scrollTop: topa
  }, 1000);
});
var nav = document.querySelector('.main-nav');
var navLink = nav.querySelectorAll('a');
var logo = document.querySelector('.scroll-cards__item-logo');
var logoItem = logo.querySelector('svg');
var logoTop = parseInt(window.getComputedStyle(logo, null).top);
var logoLeft = parseInt(window.getComputedStyle(logo, null).left);
var navLeft = parseInt(window.getComputedStyle(nav, null).left);
for (var i = 0; i < navLink.length; i++) {
  (function (i) {
    navLink[i].addEventListener('click', function (e) {
      e.preventDefault();
      var scrollPos = scrolok();
      console.log(i + 'sos');
      $('html, body').animate({
        scrollTop: scrollPos * (i + 1)
      }, 1000);
    })
  })(i);
}
var pageTitle = document.querySelector('.scroll-cards__item-title')
$(window).on('scroll', function (e) {
  var currY = $(window).scrollTop();
  var windowH = $('body').height(); // value in pixels
  var winHeight = $(window).height();
  var winWidth = $(window).width();
  // Current percentual position 286
  var percent = ((winWidth * (winHeight / winWidth) / (windowH - winHeight * (winWidth / winHeight)))).toFixed(4);
  var pos = Math.floor((windowH - winWidth * (winHeight / winWidth)) * percent * (winWidth / winHeight)) * 1 + 10;
  console.log(currY + '+' + pos);
  if (currY < pos) {
    logo.style.top = (-(logoTop * (currY / pos)) + logoTop + 51 * (currY / pos) + 'px');
    logo.style.left = (-(logoLeft * (currY / pos)) + logoLeft + 140 * (currY / pos) + 'px');
    logoItem.style.transform = 'scale(' + (-1 * (currY / pos) + 1 + 0.355 * (currY / pos)) + ')';
    nav.style.transform = 'translateX(' + (-(40 * (currY / pos)) + 40 + 286 * (currY / pos)) + 'px)';
    pageTitle.style.opacity = (-0.8 * (currY / pos) + 0.8);
    console.log((logoTop) + 'px');
  }
  if (currY > pos - 15) {
    logo.style.left = 140 + 'px';
    logo.style.top = 51 + 'px';
    logoItem.style.transform = 'scale(' + 0.355 + ')';
    nav.style.transform = 'translateX(' + 286 + 'px)'

  }
})
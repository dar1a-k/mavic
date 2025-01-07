$(function(){

  $('.products__slider').slick({
    prevArrow: '<button class="slider-btn slider-btn__left"><svg width="9.283936" height="16.716553" viewBox="0 0 9.28394 16.7166" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><path id="Vector" d="M8.93 0.35L0.71 8.35L8.93 16.35"  stroke-opacity="1.000000" stroke-width="1.000000"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn__right"><svg width="9.283936" height="16.716553" viewBox="0 0 9.28394 16.7166" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><path id="Vector" d="M0.34 16.35L8.56 8.35L0.34 0.35"  stroke-opacity="1.000000" stroke-width="1.000000"/></svg></button>',
    infinite: false,
  });

  $('.questions__item-title').on('click', function(){
    $('.questions__item').removeClass('questions__item--active');
    $(this).parent().addClass('questions__item--active');
  });

  $('.menu__btn').on('click', function() {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-link').on('click', function() {
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');
  });
  

});
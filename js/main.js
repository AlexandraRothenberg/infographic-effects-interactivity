var $banner = $('.banner');
var $width = $banner.outerWidth();
var $height = $banner.outerHeight();
var $makeSnow;
var $numberClick = $('svg');
var $input = $('#list-input');
var $list = $('.list');
var $bear = $('.bear');

for (i = 0; i < 30; i++) {

  $makeSnow = $('<div>');
  $makeSnow.addClass('snow');
  $makeSnow.css({
    top: Math.random() * $height,
    left: Math.random() * $width,
    opacity: Math.random(),
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')',
    'animation-duration': Math.floor(Math.random() * (5.5 - 2.5 + 1)) + 2.5 + 's'

  });

  $banner.append($makeSnow);

};

$('.nav').localScroll();

$('form').on('submit', function (e) {
  var $li = $('<li>');

  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
});

$('#btn-right').on('click', function () {
  var newLeft = $bear.offset().left + 10;
  $bear.css('left', newLeft);
});

$('#btn-left').on('click', function () {
  var newLeft = $bear.offset().left - 10;
  $bear.css('left', newLeft);
});

$('#btn-up').on('click', function () {
  var newTop = $bear.offset().top - 10;
  $bear.css('top', newTop);
});

$('#btn-down').on('click', function () {
  var newTop = $bear.offset().top + 10;
  $bear.css('top', newTop);
});

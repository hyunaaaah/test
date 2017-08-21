require('bootstrap');
require('../less/main.less');

require('../js/tab');
require('./main-carousel');

$('.logo').on('click', function () {
   location.href = './';
});

var pageId = $('.header-bottom > li').attr('page-id');

$('.aboutUs').on('click', function () {
   location.href = './paulBassett.html?=' + pageId;
});

$('.menu').on('click', function () {
    location.href = './menu.html';
});


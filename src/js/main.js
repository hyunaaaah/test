require('bootstrap');
require('../less/main.less');

require('../js/tab');
require('./main-carousel');

$('.logo').on('click', function () {
   location.href = './';
});

$('.aboutUs').on('click', function () {
   location.href = './paulBassett.html?=aboutUs/baristaPaul';
});

$('.menu').on('click', function () {
    location.href = './menu.html';
});


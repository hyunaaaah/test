require('bootstrap');
require('../less/main.less');

require('./tab');
var carousel = require('./main-carousel');

var model = {
   images: [
       './img/mainImage1.png',
       './img/mainImage2.jpg',
       './img/mainImage3.jpg',
       './img/mainImage4.jpg'
   ]
}

function initImage(model) {
    carousel.init($('.main-images'), model.images, function (slide) {
        var slideElement = $('<li></li>');
        slideElement.css('background-image', 'url(' + slide + ')');

        return slideElement;
    }, {
        slideDuration: 1000,
        slideInterval: 5000
    });
}

initImage(model);

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

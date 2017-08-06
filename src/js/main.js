require('bootstrap');
require('../less/main.less');

require('../js/tab');

$('.logo').on('click', function () {
   location.href = './';
});

var pageId = $('.header-bottom > li').attr('page-id');

$('.aboutUs').on('click', function () {
   location.href = './paulBassett.html?=' + pageId;
});



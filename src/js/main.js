require('bootstrap');
require('../less/main.less');

require('../js/tab');

$('.header-bottom > li').on('click', function () {
    var pageId = $(this).attr('page-id');

    location.href = './paulBassett.html?id=' + pageId;
});
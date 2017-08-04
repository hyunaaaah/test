require('bootstrap');
require('../less/paulBassett.less');

require('../js/main');

$('.aboutWBC').on('click', function () {

});

$('.paul-bassett-sub > li').on('click', function () {
    var subPageId = $(this).attr('page-id');

    location.href = './paulBassett.html?id=aboutUs/' + subPageId;
});


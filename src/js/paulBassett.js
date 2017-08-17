require('bootstrap');
require('../less/paulBassett.less');

require('../js/main');
var about = require('../js/contents/ABOUTUS');

$('.paul-bassett-sub > li').on('click', function () {
    var subPageId = $(this).attr('page-id');

    location.href = './paulBassett.html?id=aboutUs/' + subPageId;

});

function initContents() {
    var template = require('../template/contents/ABOUTUS.hbs');
    var template2 = require('../template/contents/baristaPaulBassett.hbs');

    var html = template(about);

    $('.right-contents').append(html);

    var mainHtml = template2();

    $('.main-contents').append(mainHtml);

}


initContents();

require('bootstrap');
require('../less/paulBassett.less');

require('../js/main');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var pageId = params.get('id');

var about = require('../js/contents/ABOUTUS');

$('.paul-bassett-sub > li').on('click', function () {
    var subPageId = $(this).attr('page-id');

    location.href = './paulBassett.html?id=aboutUs/' + subPageId;

});

function initContents() {
    switch (pageId) {
        case 'aboutUs/baristaPaul':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/baristaPaulBassett.hbs');

            var html = template(about[0]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'aboutUs/WBC':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/WBC.hbs');

            var html = template(about[1]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
    }
}

initContents();



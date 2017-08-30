require('bootstrap');
require('../less/paulBassett.less');

require('../js/main');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var pageId = params.get('id');

var about = require('../js/contents/ABOUTUS');

//메인화면 좌측 메뉴
$('.left-menus > li').on('click', function () {
    var subMenus = $(this).find('.left-sub-menu');
    subMenus.slideToggle();
});

$('.left-sub-menu > li').on('click', function () {
    var pageId = $(this).attr('page-id');

    location.href = 'paulBassett.html?id=aboutUs/' + pageId;
});

$('.left-menus > li').on('click', function () {
    var pageId = $(this).attr('page-id');

    if (pageId === undefined) {
        return;
    }
    location.href = 'paulBassett.html?id=aboutUs/' + pageId;
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
        case 'aboutUs/wbc':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/WBC.hbs');

            var html = template(about[1]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'aboutUs/identity':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/brandIdentity.hbs');

            var html = template(about[2]);

            $('.right-contents').append(html);

            var mainHtml = template2();
            $('.main-contents').append(mainHtml);
            break;
        case 'aboutUs/principles':
            var template  = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/brandPrinciples.hbs');

            var html = template(about[3]);

            $('.right-contents').append(html);

            var mainHtml = template2();
            $('.main-contents').append(mainHtml);
            break;
        case 'aboutUs/barista':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/barista.hbs');

            var html = template(about[4]);

            $('.right-contents').append(html);

            var mainHtml = template2();
            $('.main-contents').append(mainHtml);
            break;
        case 'aboutUs/socialContribution':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/contribution.hbs');

            var html = template(about[5]);

            $('.right-contents').append(html);

            var mainHtml = template2();
            $('.main-contents').append(mainHtml);
            break;
    }
}

initContents();


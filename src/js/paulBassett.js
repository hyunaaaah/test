require('bootstrap');
require('../less/paulBassett.less');

require('../js/main');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var pageId = params.get('id');

var about = require('../js/contents/ABOUTUS');

$('.sub-menu-list > li').on('click', function () {
    var mainPageId = $(this).attr('page-id');

    if (mainPageId == 'barista' || mainPageId == 'socialContribution') {
        location.href = './paulBassett.html?id=aboutUs/' + mainPageId;
    }
    else {
        return;
    }

});

$('.paul-bassett-sub > li').on('click', function () {
    var mainPageId = $(this).parents('.sub-menu-list > li').attr('page-id');
    var subPageId = $(this).attr('subPage-id');

    location.href = './paulBassett.html?id=aboutUs/' + mainPageId + '/' + subPageId;
});

function initContents() {
    switch (pageId) {
        case 'aboutUs/paul/baristaPaul':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/baristaPaulBassett.hbs');

            var html = template(about[0]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'aboutUs/paul/WBC':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/WBC.hbs');

            var html = template(about[1]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'aboutUs/brand/identity':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/brandIdentity.hbs');

            var html = template(about[2]);

            $('.right-contents').append(html);

            var mainHtml = template2();
            $('.main-contents').append(mainHtml);
            break;
        case 'aboutUs/brand/principles':
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



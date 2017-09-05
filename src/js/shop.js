require('../js/main');
require('../less/common.less');
require('../less/shop.less');
require('../less/paulBassett.less');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var pageId = params.get('id');

var shop = require('../js/contents/SHOP');

$('.left-sub-menu > li').on('click', function () {
    var pageId = $(this).attr('page-id');

    location.href = 'shop.html?id=shop/' + pageId;
});

$('.left-menus > li').on('click', function () {
    var pageId = $(this).attr('page-id');

    if (pageId === undefined) {
        return;
    }
    location.href = 'shop.html?id=shop/' + pageId;
});

function initContents() {
    switch (pageId) {
        case 'shop/storeSearch':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/storeSearch.hbs');

            var html = template(shop[0]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
    }
}

initContents();

$('#storeMap').on('mouseover', function () {

});
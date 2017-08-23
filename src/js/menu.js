require('bootstrap');
require('../less/menu.less');

require('../js/main');
var about = require('../js/contents/MENU');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var pageId = params.get('id');

$('.paul-bassett-sub > li').on('click', function () {
    var mainPageId = $(this).parents('.sub-menu-list > li').attr('page-id');
    var subPageId = $(this).attr('subPage-id');

    location.href = './menu.html?id=' + mainPageId + '/' + subPageId;
});

$('.sub-menu-list > li').on('click', function () {
    var subMenu = $(this).find('.paul-bassett-sub');

    subMenu.slideToggle();
});

function initContents() {
    switch (pageId) {
        case 'coffee/aboutEspresso':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/aboutEspresso.hbs');

            var html = template(about[0]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'coffee/espresso':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/espresso.hbs');

            var html = template(about[1]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'coffee/lungo':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/lungo.hbs');

            var html = template(about[2]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'coffee/latte':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/latte.hbs');

            var html = template(about[3]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'coffee/frappe':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/frappe.hbs');

            var html = template(about[3]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'nonCoffee/frappe':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/nonFrappe.hbs');

            var html = template(about[3]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'nonCoffee/yogurt':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/yogurt.hbs');

            var html = template(about[3]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'nonCoffee/tea':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/tea.hbs');

            var html = template(about[3]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
    }
}

initContents();


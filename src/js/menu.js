require('bootstrap');
require('../less/menu.less');

require('../js/main');
var about = require('../js/contents/MENU');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var pageId = params.get('id');

$('.left-menus > li').on('click', function () {
    var subMenus = $(this).find('.left-sub-menu');
    subMenus.slideToggle();
});

$('.left-sub-menu > li').on('click', function () {
    var mainPageId = $(this).parents('.left-menus > li').attr('page-id');
    var subPageId = $(this).attr('subPage-id');

    location.href = 'menu.html?id=' + mainPageId + '/' + subPageId;
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

            var html = template(about[4]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'nonCoffee/frappe':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/nonFrappe.hbs');

            var html = template(about[5]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'nonCoffee/yogurt':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/yogurt.hbs');

            var html = template(about[6]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'nonCoffee/tea':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/tea.hbs');

            var html = template(about[7]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'nonCoffee/ade':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/ade.hbs');

            var html = template(about[8]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'nonCoffee/iceCream':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/iceCream.hbs');

            var html = template(about[9]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'nonCoffee/beer':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/beer.hbs');

            var html = template(about[10]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
        case 'nonCoffee/chocolate':
            var template = require('../template/contents/ABOUTUS.hbs');
            var template2 = require('../template/contents/chocolate.hbs');

            var html = template(about[11]);

            $('.right-contents').append(html);

            var mainHtml = template2();

            $('.main-contents').append(mainHtml);
            break;
    }
}

initContents();


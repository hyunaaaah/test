var callback = [];

$('.main-page-image-selector > i').on('click', function () {
    if ($(this).hasClass('active')) {
        return;
    }

    var tabIndex = $(this).index();

    var tabBtns = $(this).parent('.main-page-image-selector').find('i')
    tabBtns.removeClass('active');
    $(tabBtns[tabIndex]).addClass('active');

    var tabContents = $(this).parents('.main').find('.main-page-image > img');
    tabContents.removeClass('active');
    $(tabContents[tabIndex]).addClass('active');

    if (typeof callback[tabIndex] === 'function') {
        callback[tabIndex]();
    }
});

module.exports = {
    setCallback: function (tabIndex, handler) {
        callback[tabIndex] = handler;
    }
};
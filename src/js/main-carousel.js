var slides = [{
    img: 'url(./img/mainImage1.png)',
}, {
    img: 'url(./img/mainImage2.jpg)',
}, {
    img: 'url(./img/mainImage3.jpg)',
}, {
    img: 'url(./img/mainImage4.jpg)'
}];

var carousel = $('.main .main-carousel-visible');
var currentSlideIndex = 0;

function slide(index) {
    var currentSlide = slides[currentSlideIndex];
    var nextSlide;

    var currentElement = carousel.find('li');
    var nextElement = $('<li></li>');



    currentElement.css('background-image', currentSlide.img);
    nextElement.css('background-image', slides[1].img);
    nextElement.css('left', '1000px');

    carousel.append(nextElement);

    $('.main-page-image-selector .first').on('click', function () {
       currentElement.css('left', '0px');
       nextElement.css('left', '1000px');
    });


    $('.main-page-image-selector .second').on('click', function () {
        currentElement.css('left', '-1000px');
        nextElement.css('left', '0px');
    });

}

slide();

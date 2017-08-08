var slides = [];

var carousel;
var currentSlideIndex = 0;
var timer;
var animating = false;

var slideDuration = 500;
var slideInterval = 3000;

var createSlideElement;

function init(carouselElement, _slides, _createSlideElement, options) {
    carousel = carouselElement.find('.main-carousel-visible');
    slides = _slides;
    createSlideElement = _createSlideElement;

    if (options) {
        slideDuration = options.slideDuration || slideDuration;
        slideInterval = options.slideInterval || slideInterval;
    }

    var firstSlideElement = createSlideElement(slides[currentSlideIndex]);
    carousel.append(firstSlideElement);

    timer = setTimeout(function() {
        slide('left');
    }, slideInterval);
}

function slide(direction) {
    animating = true;
    clearTimeout(timer);

    var currentSlide = slides[currentSlideIndex];
    var nextSlide;

    if (direction === 'left') {
        nextSlide = slides[++currentSlideIndex];

        if (!nextSlide) {
            currentSlideIndex = 0;
            nextSlide = slides[currentSlideIndex];
        }
    }
    else if (direction === 'right') {
        nextSlide = slides[--currentSlideIndex];

        if (!nextSlide) {
            currentSlideIndex = slides.length - 1;
            nextSlide = slides[currentSlideIndex];
        }
    }

    var currentElement = carousel.find('li');
    var nextElement = createSlideElement(nextSlide);
    var animationLeft;

    if (direction === 'left') {
        nextElement.css('left', '100%');
        animationLeft = '-=100%';
    }
    else if (direction === 'right') {
        nextElement.css('left', '-100%');
        animationLeft = '+=100%';
    }

    carousel.append(nextElement);

    carousel.find('li').animate({
        left: animationLeft
    }, {
        duration: slideDuration,
        complete: function() {
            currentElement.remove();
            animating = false;

            if (this === currentElement[0]) {
                return;
            }

            timer = setTimeout(function() {
                slide('left');
            }, slideDuration);
        }
    });
}

$('.main-carousel-indicator').on('click', function() {
    if (animating) {
        return;
    }

    if ($(this).hasClass('left')) {
        slide('left');
    }
    else if ($(this).hasClass('right')) {
        slide('left');
    }
});

module.exports = {
    init: init
};
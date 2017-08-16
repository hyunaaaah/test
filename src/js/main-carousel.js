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
var animating = false;

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
    var nextElement = $('<li></li>');
    nextElement.css('background-image', nextSlide.img);
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
        duration: 500,
        complete: function() {
            currentElement.remove();
            animating = false;

            if (this === currentElement[0]) {
                return;
            }

            timer = setTimeout(function() {
                slide('left');
            }, 3000);
        }
    });
}

var timer = setTimeout(function() {
    slide('left');
}, 2000);
let SCREEN_WIDTH = document.body.offsetWidth
let IS_MOBILE = SCREEN_WIDTH < 479

function sliderServicesInit(classEl, breakpoint) {

    if (SCREEN_WIDTH <= breakpoint) {
        new Swiper(classEl, {
            direction: 'horizontal',
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '.services-slider-pagination',
                bulletActiveClass: 'active-bullet',
                bulletClass: 'bullet',
                clickable: true
            },
            navigation: {
                nextEl: '.services-next-slide',
                prevEl: '.services-prev-slide',
            }

        })
        return
    }
    const swiper = new Swiper(classEl, {
        enabled: false
    })
}

function sliderServicesStart() {
    !IS_MOBILE ? sliderServicesInit('.service-slider-tablet', 1000) : sliderServicesInit('.services-slider-mobile', 478)
}

function sliderReviewsInit() {
    new Swiper('.reviews-slider', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        slideClass: 'reviews-slide',
        slidesPerView: 4,
        scrollbar: false,
        wrapperClass: 'reviews-slider__wrapper',
        pagination: {
            el: '.reviews-slider-pagination',
            bulletActiveClass: 'active-bullet',
            bulletClass: 'bullet',
            clickable: true
        },
        navigation: {
            nextEl: '.reviews-next-slide',
            prevEl: '.reviews-prev-slide',
        }

    })
}

window.onresize = function () {
    SCREEN_WIDTH = document.body.offsetWidth
    IS_MOBILE = SCREEN_WIDTH < 479
    sliderServicesStart()
}

sliderServicesStart()
sliderReviewsInit()


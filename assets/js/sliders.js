let SCREEN_WIDTH = document.body.offsetWidth
let IS_MOBILE = SCREEN_WIDTH < 479
let IS_TABLET = SCREEN_WIDTH < 830

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
        slidesPerView: 1,
        scrollbar: false,
        wrapperClass: 'reviews-slider__wrapper',
        pagination: {
            el: '.reviews-slider-pagination',
            bulletActiveClass: 'active-bullet',
            bulletClass: 'bullet',
            clickable: true
        },
        breakpoints: {
            1000: {
                slidesPerView: 3
            },
            1700: {
                slidesPerView: 4
            }

        },
        navigation: {
            nextEl: '.reviews-next-slide',
            prevEl: '.reviews-prev-slide',
        }

    })
}

function sliderSertificatesInit() {
   IS_TABLET ? new Swiper('.sertificates-slider', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        slideClass: 'sertificates-slide',
        slidesPerView: 1,
        scrollbar: false,
        wrapperClass: 'sertificates-slider__wrapper',
        pagination: {
            el: '.sertificates-slider-pagination',
            bulletActiveClass: 'active-bullet',
            bulletClass: 'bullet',
            clickable: true
        },
        breakpoints: {
            478: {
                slidesPerView: 2
            }
        },
        navigation: {
            nextEl: '.sertificates-next-slide',
            prevEl: '.sertificates-prev-slide',
        }

    }) : new Swiper('.sertificates-slider', {
       direction: 'horizontal',
       init: false
   })
}

function slidersStart() {
    sliderServicesStart()
    sliderReviewsInit()
    sliderSertificatesInit()
}

window.onresize = function () {
    SCREEN_WIDTH = document.body.offsetWidth
    IS_MOBILE = SCREEN_WIDTH < 479
    IS_TABLET = SCREEN_WIDTH < 830
    slidersStart()
}
slidersStart()
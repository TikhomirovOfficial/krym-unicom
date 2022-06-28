

function sliderServicesInit(classEl, breakpoint) {
    if (document.body.offsetWidth <= breakpoint) {
        const swiper = new Swiper(classEl, {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            spaceBetween: 30,

            // If we need pagination
            pagination: {
                el: '.services-slider-pagination',
                bulletActiveClass: 'active-bullet',
                bulletClass: 'bullet',
                clickable: true
            },

            // Navigation arrows
            navigation: {
                nextEl: '.services-next-slide',
                prevEl: '.services-prev-slide',
            }

        })
        return 1
    }
    const swiper = new Swiper(classEl, {
        enabled: false
    })
}


window.onresize = function () {
   sliderServicesInit('.service-slider-tablet', 1000)
   sliderServicesInit('.services-slider-mobile', 478)
}

sliderServicesInit('.service-slider-tablet', 1000)
sliderServicesInit('.services-slider-mobile', 478)


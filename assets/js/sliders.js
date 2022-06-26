function slickify() {
    if (document.body.offsetWidth <= 1000) {
        $('.services-list').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
}
window.onresize = function () {
    if(document.body.offsetWidth > 1000) {
        $('.services-list').slick('unslick');
    }
    slickify()
}

slickify()
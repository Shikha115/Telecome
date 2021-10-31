$(document).ready(function() {

    $(".navbar-toggler").click(() => {
        $(this).find("i").toggleClass("fa-bars").toggleClass("fa-times");
        $("button.navbar-toggler").css({
            "position": "fixed"
        });
        $(".add-overlay").toggleClass("overlay");
    });

    // $(".add-overlay").click(() => {
    //     $(".navbar-toggler").click();
    // });


    $('.sec3_carousel_1').owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('.sec3_carousel_2').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: false,
        dots: false,
        animateOut: 'fadeOut'
    });

    $('.sec7-inner').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: false,
        animateOut: 'fadeOut'
    });

    $('.about-clients-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: false,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

});
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() <= 40) {
            $('.sticky-top').css('background-color', 'transparent')
            $('.sticky-top .navbar ul li .nav-link').removeClass('shrink')
            $('header nav .navbar-brand').css('color', 'white')
        } else {
            $('.sticky-top').css('background-color', 'white')
            $('header .navbar ul li .nav-link').addClass('shrink')
            $('header nav .navbar-brand').css('color', 'black')
        }
    });

    // owl-carousel
    $('.hero-carousel').owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false
    })

    $(".testim-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    $(".brand-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 8
            }
        }
    });



    $(window).scroll(function () {
        if ($(window).scrollTop() > 200 && $(window).width() > 768) {
            $('.box').addClass('animi')
        }
    });

    new WOW().init();

});
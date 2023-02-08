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

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false

    })



});
$(document).ready(function(){
    carouselHeader();
    scrollTop();
    carouselSectionThird();
});

$(window).resize(function () {
    deletionClassShow();
});

$(window).scroll(function() {
    scrollTop();
});

// -- Slider options in header -- //
function carouselHeader() {
    let headerCarousel = '.header-carousel';
    $(headerCarousel).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        draggable: false,
        nextArrow: '<i class="fas fa-angle-right slick-next slick-arrow"></i>',
        prevArrow: '<i class="fas fa-angle-left slick-prev slick-arrow"></i>',
        speed: 1500
    });
}

// -- Slider options in section third -- //
function carouselSectionThird() {
    let headerCarousel = '.section-third-carousel';
    $(headerCarousel).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        speed: 1500,
        dots: true,
        vertical: true,
    });
}

// -- Deletion .show to header menu with resize -- //
function deletionClassShow() {
    let collapsibleNavbar = '#collapsibleNavbar';
    if ($(window).width() >= 768){
        $(collapsibleNavbar).removeClass('show', 800, 'swing');
    };
}

// -- Adding background-color and toggling padding-top to header with scroll -- //
function scrollTop() {
    let headerWrapInner = '.header-wrap-inner';
    let navbar = '.navbar';
    if ($(document).scrollTop() > 50) {
        $(headerWrapInner).addClass('header-wrap-inner-background-color', 800, 'swing');
        $(navbar).addClass('navbar-pt', 800, 'swing');
    } else {
        $(headerWrapInner).removeClass('header-wrap-inner-background-color', 800, 'swing');
        $(navbar).removeClass('navbar-pt', 800, 'swing');
    }
}


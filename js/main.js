$(document).ready(function () {
    var articlesSlider;
    var articlesSliderSettings;

    /*scrolling animation*/
    ScrollOut({
        once: true
    });
    
    function isMobile() {
        var target = $('.is-mobile');

        if (target.css('display') === 'block') {
            return true;
        } else {
            return false;
        }
    }

    $('.hamburger').on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass('is-active');
        $('body, html').toggleClass('no-scroll');
        $('.header').toggleClass('is-open');
        $('.header-nav').toggleClass('is-active');
    });

    //reseting header classes on resize
    function headerReset() {
        $('.hamburger').removeClass('is-active');
        $('.header').removeClass('is-open');
        $('.header-nav').removeClass('is-active');
        $('body, html').removeClass('no-scroll');
    }

    /*smooth scrolling*/
    $('.hero__scroll').click(function (e) {
        e.preventDefault();
        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 'slow');
    });

    /*homepage carousels*/
    $('.harrods-slider').slick({
        dots: false,
        arrows: true,
        fade: true
    });

    articlesSlider = $('.articles-slider');
    articlesSliderSettings = {
        dots: true,
        arrows: false,
        fade: true,
        mobileFirst: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: "unslick"
            }
        ]
    };

    articlesSlider.slick(articlesSliderSettings);

    function articlesSliderInit() {
        if (!isMobile()) {
            if (articlesSlider.hasClass('slick-initialized')) {
                articlesSlider.slick('unslick');
            }
            return;
        }

        if (!articlesSlider.hasClass('slick-initialized')) {
            return articlesSlider.slick(articlesSliderSettings);
        }
    }

    articlesSliderInit();

    $(window).resize(function () {
        if (!isMobile()) {
            headerReset();
        }

        articlesSliderInit();
    });

});
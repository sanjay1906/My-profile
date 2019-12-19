$(document).ready(function() {

    'use strict';

    // ========================================================================= //
    // SMOOTH SCROLL js
    // ========================================================================= //

    $(document).on("scroll", onScroll);
    $("a").on('click', function(e) {
        //Only do the smooth scrolling If the link has a hash and the link is pointing to this same page.
        if (this.hash !== "" && this.pathname == window.location.pathname) {
            e.preventDefault();

            $('a').each(function() {
                $(this).removeClass('active');
                if ($(window).width() < 768) {
                    $('.nav-menu').slideUp();
                }
            });

            $(this).addClass('active');

            var target = this.hash;
            var topOffset = 0; //#top should default to 0 so no need to calculate the difference between top and top :)
            if (target != "#top") { //If the target is not "#top", then calculate topOffset 
                var topOffset = $(target).offset().top;
            }

            $('html, body').stop().animate({
                'scrollTop': topOffset
            }, 900, 'swing', function() {
                window.location.hash = target;
            });
        }
    });

    function onScroll(event) {
        if ($('#home').length) {
            var scrollPos = $(document).scrollTop();
            $('nav ul li a').each(function() {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('nav ul li a').removeClass("active");
                    currLink.addClass("active");
                }
            });
        }
    }

    // ========================================================================= //
    // RESPONSIVE MENU
    // ========================================================================= //

    $('.full-menu nav ul li a').on('click', function() {
        $('body').removeClass('full-open');
    });

    $('.nav-icon').click(function() {
        $('body').toggleClass('full-open');
    });

    // ========================================================================= //
    //  Owl Carousel testimonials js
    // ========================================================================= //

    $('.testimonials-slider').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        smartSpeed: 900,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            },
            1199: {
                items: 1
            }
        }
    });

    // ========================================================================= //
    //  Owl Carousel Services
    // ========================================================================= //

    $('.client-logo').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            767: {
                items: 3
            },
            992: {
                items: 4
            },
            1199: {
                items: 4
            }
        }
    })

    // ========================================================================= //
    //  magnificPopup
    // ========================================================================= //

    var magnifPopup = function() {
        $('.popup-img').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };

    // Call the functions
    magnifPopup();

    // ========================================================================= //
    //  counterUp
    // ========================================================================= //

    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });

    // ========================================================================= //
    //  WOW JS
    // ========================================================================= //

    new WOW({
        mobile: false
    }).init();


});


/*========Window Load Function========*/
$(window).on("load", function() {

    // ========================================================================= //
    //  pre-loader
    // ========================================================================= //

    $(".pre-loader").fadeOut(500);

    // ========================================================================= //
    //  Porfolio isotope and filter
    // ========================================================================= // 

    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-grid-item'
    });

    $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });

});
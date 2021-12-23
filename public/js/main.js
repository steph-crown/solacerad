(function ($) {
    "use strict";

    /*-------------------------------------------
        preloader active
        --------------------------------------------- */
    jQuery(window).load(function () {
        jQuery(".preloader").fadeOut("slow");
    });

    /*-------------------------------------------
        Sticky Header
        --------------------------------------------- */
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 80) {
            $("#sticky").addClass("stick");
        } else {
            $("#sticky").removeClass("stick");
        }
    });

    jQuery(document).ready(function () {
        /*--------------------------------
            Bootstrap Dropdown Animation
          -----------------------------------*/
        // Add slideDown animation to Bootstrap dropdown when expanding.
        $(".dropdown").on("show.bs.dropdown", function () {
            $(this).find(".dropdown-menu").first().stop(true, true).slideDown();
        });

        // Add slideUp animation to Bootstrap dropdown when collapsing.
        $(".dropdown").on("hide.bs.dropdown", function () {
            $(this).find(".dropdown-menu").first().stop(true, true).slideUp();
        });

        /*-------------------------------------------
          js wow active
          --------------------------------------------- */
        new WOW().init();

        /*-------------------------------------------
          js scrollup
          --------------------------------------------- */
        $.scrollUp({
            scrollText: '<i class="fa fa-angle-up"></i>',
            easingType: "linear",
            scrollSpeed: 500,
            animation: "fade",
        });

        /*-------------------------------------------
          testimonial-slide active
          --------------------------------------------- */
        $(".testimonial-slide").slick({
            infinite: true,
            speed: 0,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: false,
            dots: false,
            arrows: false,
            prevArrow: '<i class="slick-prev arrow fas fa-angle-left"></i> ',
            nextArrow: '<i class="slick-next arrow fas fa-angle-right"></i> ',
            vertical: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
        /*---------------------------------
          venobox Popup active
          -----------------------------------*/
        $(".popup-video").venobox();

        /*---------------------------------
          isotope activation 
          -----------------------------------*/
        $(".grid").appear(function () {
            // filter items on button click
            $(".filtering-button").on("click", "li", function () {
                var filterValue = $(this).attr("data-filter");
                $grid.isotope({ filter: filterValue });
            });
            var $grid = $(".grid").isotope({
                // set itemSelector so .grid-sizer is not used in layout
                itemSelector: ".grid-item",
                percentPosition: true,
                animationOptions: {
                    duration: 500,
                    easing: "zoom-in",
                },
                masonry: {
                    // use element for option
                    columnWidth: ".grid-item",
                },
                transitionDuration: ".9s",
            });

            $(".filtering-button li").on("click", function () {
                $(".filtering-button li").removeClass("active");
                $(this).addClass("active");
            });
        });

        /*---------------------------------
          counterUp active
          -----------------------------------*/
        jQuery(".counter").counterUp({
            delay: 10,
            time: 1000,
        });

        /*---------------------------------
          niceSelect active
          -----------------------------------*/
        jQuery("select").niceSelect();
    });
})(jQuery);

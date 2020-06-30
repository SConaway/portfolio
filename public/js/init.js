/*-----------------------------------------------------------------------------------
/*
/* Functions that didn't work in `src/index.js`
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {
    /*----------------------------------------------------
        Smooth Scrolling
    ------------------------------------------------------ */

    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body')
            .stop()
            .animate(
                {
                    scrollTop: $target.offset().top,
                },
                800,
                'swing',
                function () {
                    window.location.hash = target;
                },
            );
    });

    /*----------------------------------------------------
        Highlight the current section in the navigation bar
    ------------------------------------------------------*/

    $('section').waypoint({
        handler: function (direction) {
            var e = $('#' + this.element.id);

            if (direction === 'up') e = e.prev();

            $('#nav-wrap a').parent().removeClass('current');
            $('#nav-wrap a[href="#' + e.attr('id') + '"]')
                .parent()
                .addClass('current');
        },
    });

    /*----------------------------------------------------
        Fade In/Out Primary Navigation
    ------------------------------------------------------*/

    $(window).on('scroll', function () {
        var h = $('header').height();
        var y = $(window).scrollTop();
        var nav = $('#nav-wrap');

        if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
            nav.fadeOut('fast');
        } else {
            if (y < h * 0.2) {
                nav.removeClass('opaque').fadeIn('fast');
            } else {
                nav.addClass('opaque').fadeIn('fast');
            }
        }
    });
});

$(function() {

    "use strict";

    // Sticky Header
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('#header-menu').addClass("fixed-top");
        } else {
            $('#header-menu').removeClass("fixed-top");
        }
    });

    // Scroll Menu
    $(".navbar-nav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Add Active Menu
    $(document).on("click", ".navbar-nav a", function() {
        $(".navbar-nav").find("li").removeClass("active");
        $(this).closest("li").addClass("active");
    });

    // Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    // scrollUp
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    // Instafeed Active 
    if($('#Instafeed').length) {

        var feed = new Instafeed({
            get: 'user',
            userId: 6925251571,
            accessToken: '6925251571.1677ed0.5ae0108a22d54c689a42b0df810b29b9',
            target: 'Instafeed',
            resolution: 'thumbnail',
            limit: 6,
            template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>',
        });
        
        feed.run(); 
    }

});


// Event video player
document.addEventListener('DOMContentLoaded', () => { 
    // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
    const player = new Plyr('#player');
      
    // Expose
    window.player = player;

    // Bind event listener
    function on(selector, type, callback) {
        document.querySelector(selector).addEventListener(type, callback, false);
    }

    $(".js-play").on('click', function (e) {

        e.preventDefault();

        if ($(this).hasClass('plyr--playing')) {

            $(this).removeClass('plyr--playing').html('<i class="fa fa-play"></i>');
            player.pause();

        } else {

            $(this).addClass('plyr--playing').html('<i class="fa fa-pause"></i>');
            player.play();

        }

    });

});
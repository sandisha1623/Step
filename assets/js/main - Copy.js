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

    // Video
    /*if ($(".video-area").length > 0) {

        $("#videoPlayer").YTPlayer({
            quality: 'highres',
            useOnMobile: true,
            ratio: '16/9',
        });

        $(".playBtn").on('click', function (e) {

            e.preventDefault();

            if ($(this).hasClass('alreadyPlay')) {

                $(this).removeClass('alreadyPlay').html('<i class="fa fa-play"></i>');
                $('#videoPlayer').YTPPause();

            } else {

                $(this).addClass('alreadyPlay').html('<i class="fa fa-pause"></i>');
                $('#videoPlayer').YTPPlay();

            }
        });

    }*/

});


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

      // Play
      on('.js-play', 'click', () => { 
        player.play();
      });

      // Pause
      on('.js-pause', 'click', () => { 
        player.pause();
      });

      // Stop
      on('.js-stop', 'click', () => { 
        player.stop();
      });

      // Rewind
      on('.js-rewind', 'click', () => { 
        player.rewind();
      });

      // Forward
      on('.js-forward', 'click', () => { 
        player.forward();
      });
    });
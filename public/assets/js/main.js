(function ($) {
    "use strict";

    var $document = $(document);
        
    // Template Blocks
    var sliderRevolution= $('.slider-revolution');
    var ttwindowWidth = window.innerWidth || $window.width();    

    if (sliderRevolution.length) {
        sliderRevolution();
    };
    $(document).on({
      mouseenter: function() {

        var $this = $(this),
          that = this,
          windowW = window.innerWidth || $(window).width();

        if (windowW > 1025 && $body.hasClass('touch-device')) {
          $ttDesctopMenu.find('.dropdown.tt-submenu > a').one("click", false);
        };

          timeout1 = setTimeout(function () {

              var $carousel = $this.find('.tt-menu-slider'),
                $ttDesctopMenu = $this.find('.dropdown-menu');


              $this.addClass('active')
                 .find(".dropdown-menu")
                 .stop()
                 .addClass('hover')
                 .fadeIn(hoverTimer);

              if($ttDesctopMenu.length & !$ttDesctopMenu.hasClass('one-col')) {
                  set_dropdown_maxH.call(that);
              }

              if($carousel.length) {
                if(!$carousel.hasClass('slick-initialized')) {
                      $carousel.slick({
                        dots: false,
                        arrows: true,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        adaptiveHeight: true
                      });
                    }
                };
                $carousel.slick('setPosition');

          }, delay);

      },
      mouseleave: function(e) {
        var $this = $(this),
          $dropdown = $this.find(".dropdown-menu");

        if($(e.target).parents('.dropdown-menu').length && !$(e.target).parents('.tt-megamenu-submenu').length && !$(e.target).parents('.one-col').length) return;

        if(timeout1 !== false) {
          clearTimeout(timeout1);
          timeout1 = false;
        }

          if($dropdown.length) {
            $dropdown.stop().fadeOut({duration: 0, complete: function() {
              $this.removeClass('active')
                   .find(".dropdown-menu")
                   .removeClass('hover');
            }});
        } else {
          $this.removeClass('active')
                 .find(".dropdown-menu")
                 .removeClass('hover');
        }

        $dropdown.removeAttr('style');

            $body.removeAttr('style');

            $('.stuck-nav').css({
              paddingRight: 'inherit'
            });

            blocks.ttBackToTop.css({
              right: 0
            });
      }
    }, '.tt-desctop-menu li');

    

   //REVOLUTION SLIDER (function to reset the plug on the breakpoints)
   function sliderRevolution(){
    function click_to_play_video() {
      var $this = $(this),
        $video = $this.find('li video');

      if (!$video.length) return;

      $video.on('play', function() {
        var $btn = $(this).parents('li').find('.video-play');

        $btn.addClass('pause');
        $(this).parents('.tp-caption.fullscreenvideo').addClass('click-video');
      });

      $video.on('pause ended', function() {
        var $btn = $(this).parents('li').find('.video-play');

        $btn.removeClass('pause');
      });

      $this.find('.video-play').on('click', function(e) {
        var $video = $(this).parents('li').find('video');

        $video.trigger('click');
        e.preventDefault();
        e.stopPropagation();
        return false;
      });

      $this.on('revolution.slide.onbeforeswap', function(event, data) {
        $(this).find('.tp-caption.fullscreenvideo').removeClass('click-video');
      });
    };
    function autoplay_video(elem) {
      var $get_sliders = $(this);

      $get_sliders.each(function() {
        var $slider = $(this);

        var set_event = function() {
          $slider.on('revolution.slide.onchange', function(event, data) {
            var $this = $(this),
              $active_slide = $this.find('li').eq(data.slideIndex - 1),
              $video = $active_slide.find('video'),
              autoplay = $active_slide.find('.tp-caption').attr('data-autoplay');

            if ($video.length && autoplay === 'true') {
              var video = $video.get(0);

              video.currentTime = 0;

              $slider.one('revolution.slide.onafterswap', function(event, data) {
                if (video.paused) {
                  video.play();
                }
              });
            }
          });
        };

        if ($slider.hasClass('revslider-initialised')) {
          set_event();
        } else {
          $slider.one('revolution.slide.onloaded', function() {
            set_event();
          });
        }
      });
    };

    $.fn.resizeRevolution = function(options, new_rev_obj, bp_arr) {
      if (!$(this).length || !$(options.slider).length || !options.breakpoints) return false;

      var wrapper = this,
        slider = options.slider,
        breakpoints = options.breakpoints,
        fullscreen_BP = options.fullscreen_BP || false,
        new_rev_obj = new_rev_obj || {},
        bp_arr = bp_arr || [],
        rev_obj = {
          dottedOverlay: "true",
          delay: 4600,
          startwidth: 1920,
          hideThumbs: 200,
          hideTimerBar: "on",

          thumbWidth: 100,
          thumbHeight: 50,
          thumbAmount: 5,

          navigationArrows: "none",

          touchenabled: "on",
          onHoverStop: "on",

          swipe_velocity: 0.7,
          swipe_min_touches: 1,
          swipe_max_touches: 1,
          drag_block_vertical: false,

          parallax: "mouse",
          parallaxBgFreeze: "on",
          parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

          keyboardNavigation: "off",

          navigationHAlign: "center",
          navigationVAlign: "bottom",
          navigationHOffset: 0,
          navigationVOffset: 20,

          soloArrowLeftHalign: "left",
          soloArrowLeftValign: "center",
          soloArrowLeftHOffset: 20,
          soloArrowLeftVOffset: 0,

          soloArrowRightHalign: "right",
          soloArrowRightValign: "center",
          soloArrowRightHOffset: 20,
          soloArrowRightVOffset: 0,

          shadow: 0,

          spinner: "",
          h_align: "left",

          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,

          shuffle: "off",

          autoHeight: "off",
          forceFullWidth: "off",

          hideThumbsOnMobile: "off",
          hideNavDelayOnMobile: 1500,
          hideBulletsOnMobile: "off",
          hideArrowsOnMobile: "off",
          hideThumbsUnderResolution: 0,

          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          startWithSlide: 0,
          fullScreenOffsetContainer: false
        };

      $.extend(rev_obj, new_rev_obj);

      var get_Slider = function($sliderWrapp) {
        return $sliderWrapp.find(slider);
      };

      var get_current_bp = function() {
        var wind_W = window.innerWidth;

        for (var i = 0; i < breakpoints.length; i++) {
          var bp = breakpoints[i];

          if (!breakpoints.length) return false;

          if (wind_W <= bp) {
            if (i === 0) {
              return bp;
            } else {
              if (bp > breakpoints[i - 1])
                return bp;
            }
          } else if (wind_W > bp && i === breakpoints.length - 1)
            return Infinity;
        }
        return false;
      };

      var $sliderWrappers = $(wrapper);

      $sliderWrappers.each(function() {
        var $sliderWrapp = $(this),
          $sliderInit = get_Slider($sliderWrapp),
            $sliderCopy = $sliderWrapp.clone(),
            bp = get_current_bp();

        if (!$sliderInit.length) return false;

        var start_Rev = function($sliderInit, bp) {
          var wind_W = window.innerWidth,
            rev_settings_obj = {},
            rev_screen_obj = {},
            set_rev_obj = {};

          if (fullscreen_BP) {
            var full_width = (wind_W >= fullscreen_BP) ? 'off' : 'on',
              full_screen = (wind_W >= fullscreen_BP) ? 'on' : 'off';

            rev_screen_obj = {
              fullWidth: full_width,
              fullScreen: full_screen
            };
          }

          if (bp_arr.length) {
            for (var i = 0; i < bp_arr.length; i++) {
              var this_obj = bp_arr[i];

              if (this_obj.bp && this_obj.bp.length === 2 && this_obj.bp[0] < this_obj.bp[1]) {
                var from = this_obj.bp[0],
                  to = this_obj.bp[1];

                if (from <= bp && to >= bp) {
                  for (var key in this_obj) {
                    if (key !== 'bp')
                      rev_settings_obj[key] = this_obj[key];
                  }
                }
              }
            }
          }

          $.extend(set_rev_obj, rev_obj, rev_settings_obj, rev_screen_obj);

          $($sliderInit).show().revolution(set_rev_obj);

          $(options.functions).each(function() {
            this.call($sliderInit);
          });
        };

        start_Rev($sliderInit, bp);

        var restart_Rev = function(current_bp) {
          if (!$($sliderInit).hasClass('revslider-initialised')) return;
          bp = current_bp || 0;
          $sliderInit.revkill();
          $sliderWrapp.replaceWith($sliderCopy);
          $sliderWrapp = $sliderCopy;
          $sliderCopy = $sliderWrapp.clone();
          $sliderInit = get_Slider($sliderWrapp);
          start_Rev($sliderInit, bp);
        };

        function endResize(func) {
          var windWidth = window.innerWidth,
            interval;

          interval = setInterval(function() {
            var windWidthInterval = window.innerWidth;
            if (windWidth === windWidthInterval) {
              setTimeout(function() {
                func();
              }, 200);
            }
            clearInterval(interval);
          }, 100);
        };

        $(window).on('resize', function() {
          endResize(function() {
            var current_bp = get_current_bp();
            if (current_bp !== bp)
              restart_Rev(current_bp);
          })
        });
      });
    };

   var $slider = $('.slider-revolution.revolution-default'),
       fullscreen = $slider.attr('data-fullscreen') == 'false' ? false : 768,
       width = $slider.attr('data-width'),
       height = $slider.attr('data-height');

    $('.slider-revolution.revolution-default').resizeRevolution({
      slider: '.tp-banner',
      breakpoints: [414, 789, 1025],
      fullscreen_BP: fullscreen,
      functions: [
        click_to_play_video,
        autoplay_video
      ]
    }, {
       fullScreenOffsetContainer: "header, .tt-add-full-screen",
       navigationArrows: "true",
       startwidth: width || 1920,
       startheight: height || 800
    }, [{
      bp: [0, 790],
      startheight: height || 1200
    }]);

    $('.slider-revolution.revolution-static').resizeRevolution({
      slider: '.tp-banner',
      breakpoints: [414, 789, 1025],
      fullscreen_BP: 790,
      functions: [
        click_to_play_video,
        autoplay_video
      ]
    }, {
      fullScreenOffsetContainer: "header-static"
    }, [{
        bp: [0, 790],
        startheight: 1300
      },
      {
        bp: [0, 1025],
        fullScreenOffsetContainer: "header"
      }
    ]);

};
})(jQuery);

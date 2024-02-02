


/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;

		for (; i < l; i++) {
			var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

			if (key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));


(function($) {
  "use strict";

  jQuery(document).ready(function(){



    /* jQuery MeanMenu */
    $('#mobile-menu-active').meanmenu({
      meanScreenWidth: "991",
      meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });



    /* Match Height */  
    $(function() {
      $('.match_height > div').matchHeight();
    });




    /*--- clickable menu active ----*/
    const slinky = $('#menu').slinky()
    /*====== sidebarmenu ======*/
    function sidebarMainmenu() {
      var menuTrigger = $('.clickable-mainmenu-active'),
          endTrigger = $('button.clickable-mainmenu-close'),
          container = $('.clickable-mainmenu');
      menuTrigger.on('click', function(e) {
        e.preventDefault();
        container.addClass('inside');
      });
      endTrigger.on('click', function() {
        container.removeClass('inside');
      });
    };
    sidebarMainmenu();



    $('.tab1_slide').owlCarousel({
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 5000,
      navText: ['<img src="//potionandtwig.com/cdn/shop/t/12/assets/57.png?v=126169134355475728471621610652">', '<img src="//potionandtwig.com/cdn/shop/t/12/assets/58.png?v=155388911467270712471621610653">'],
      item: 4,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1000: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    })




    /* brand logo active */
    $('.brand-logo-active3').owlCarousel({
      loop: true,
      nav: false,
      autoplay: false,
      autoplayTimeout: 5000,
      item: 6,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
        1000: {
          items: 4
        },
        1200: {
          items: 6
        }
      }
    })


    /* instafeed active */
    $('.instafeed-active').owlCarousel({
      loop: true,
      nav: false,
      autoplay: false,
      autoplayTimeout: 5000,
      item: 5,
      margin: 17,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
        1000: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    })









    /* popular-product-active-2 active */
    $('.popular-product-active-2').owlCarousel({
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 5000,
      item: 4,
      margin: 22,
      navText: ['<img src="assets/img/icon-img/left.png">', '<img src="assets/img/icon-img/right.png">'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1000: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    })





    /*category left menu*/
    $('.category-heading-2').on('click', function() {
      $('.category-menu-list').slideToggle(300);
    });


    /*--
    menu-toggle
    ------------------------*/
    $('.menu-toggle').on('click', function() {
      if ($('.menu-toggle').hasClass('is-active')) {
        $('.hamburger-menu nav').removeClass('menu-open');
      } else {
        $('.hamburger-menu nav').addClass('menu-open');
      }
    });


    /*--
    	Hamburger js
    -----------------------------------*/
    var forEach = function(t, o, r) {
      if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
      else
        for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
          };

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }





    /*----------------------------
        text-animation
    ------------------------------ */
    $('.tlt1').textillate({
      loop: true,
      in: {
        effect: 'fadeInDown',
      },
      out: {
        effect: 'flip',
      },
    });

    /*--
    Menu Stick
    -----------------------------------*/
    $(window).on('scroll', function() {
      var scroll = $(window).scrollTop();
      if (scroll < 1) {
        $('.sticker').removeClass('stick');
      } else {
        $('.sticker').addClass('stick');
      }
    });

    /* hover 3d init for tilt */
    if ($('.tilter').length > 0) {
      $('.tilter').tilt({
        maxTilt: 40,
        perspective: 800,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: 1,
        speed: 800,
        transition: true,
      });
    }

    /* hover 3d init for tilt */
    if ($('.tilter-2').length > 0) {
      $('.tilter-2').tilt({
        maxTilt: 20,
        perspective: 700,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: 1,
        speed: 500,
        transition: true,
      });
    }

    /* hover 3d init for tilt */
    if ($('.tilter-3').length > 0) {
      $('.tilter-3').tilt({
        maxTilt: 20,
        perspective: 800,
        easing: "cubic-bezier(.03,.2,.5,.4)",
        scale: 1,
        speed: 500,
        transition: true,
      });
    }


    /*--- showlogin toggle function ----*/
    $('#showlogin').on('click', function() {
      $('#checkout-login').slideToggle(900);
    });

    /*--- showlogin toggle function ----*/
    $('#showcoupon').on('click', function() {
      $('#checkout_coupon').slideToggle(900);
    });

    /*--- showlogin toggle function ----*/
    $('#ship-box').on('click', function() {
      $('#ship-box-info').slideToggle(1000);
    });




    /*---------------------
    sidebar sticky
    --------------------- */
    $('.sidebar-active').stickySidebar({
      topSpacing: 80,
      bottomSpacing: 30,
      minWidth: 991,
    });

    $('.sidebar-active1').stickySidebar({
      topSpacing: 80,
      bottomSpacing: 30,
      minWidth: 991,
    });

    $('.sidebar-active3').stickySidebar({
      topSpacing: 80,
      bottomSpacing: 30,
      minWidth: 991,
    });

    /* isotop active */
    // filter items on button click
    if($('.blog-mesonry').length > 0){
      $('.blog-mesonry').imagesLoaded(function() {
        // init Isotope
        var $grid = $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item',
          }
        });
      });
    }

    $('.notification-close button').on('click', function() {
      $('.notification-section').slideUp();
    });


    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
    $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find("input").val(newVal);
    });

    /*---------------------
    price slider
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function() {
      sliderrange.slider({
        range: true,
        min: 20,
        max: 100,
        values: [0, 100],
        slide: function(event, ui) {
          amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
      });
      amountprice.val("$" + sliderrange.slider("values", 0) +
                      " - $" + sliderrange.slider("values", 1));
    });

    /*--------------------------
        09. ScrollUp
    ---------------------------- */
    $.scrollUp({
      scrollText: '<i class="ti-arrow-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
    });



    /*---------------------
    countdown
  --------------------- */
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
      });
    });

    /*------ Wow Active ----*/
    new WOW().init();

    /*--
	Header Search Toggle
    -----------------------------------*/
    var searchToggle = $('.search-toggle');
    searchToggle.on('click', function(){
      if($(this).hasClass('open')){
        $(this).removeClass('open');
        $(this).siblings('.handicraft-content').removeClass('open');
      }else{
        $(this).addClass('open');
        $(this).siblings('.handicraft-content').addClass('open');
      }
    });




    /* Ajax Cart */
    $(".cart-item").on('click', function(){
      $(this).addClass("loading add-item");
      setTimeout(function () {
        $(".cart-item").removeClass("loading");
      },1000);
      setTimeout(function () {
        $(".cart-item").removeClass("add-item");
      },1800);

    });


    /* Remover Hyperlink */

    $('.remove_href').removeAttr('href');
    $('.rhs_qcv a').addClass('btn-hover');    
    $('.grid_product').parent('div').addClass('mb-50');    
    $('.book-banner-wrapper').parents('div').find('.banner-area').addClass('book_banner');
    $('.cart_other_page .icon-cart-furniture').removeClass('white-cart');
    $('.rhs_qcv .btn-hover').removeClass('list-btn-wishlist');
    $('.book-list-active .product-wrapper').removeClass('mb-95');



    /*category mobile menu*/
    $('.cat_header').on('click', function() {
      $('.sidebarmenu-wrapper').slideToggle(300);
    });

    function sidemenuDropdown() {
      var $this = $('.sidebarmenu-wrapper');
      $this.find('nav.menu .cr-dropdown')
      .find('ul').slideUp();
      $this.find('nav.menu li.cr-dropdown > a, nav.menu li.cr-sub-dropdown > a').on('click', function(e) {
        e.preventDefault();
        $(this).next().slideToggle();
      });
    }
    sidemenuDropdown();

    
    








  });



})(jQuery);

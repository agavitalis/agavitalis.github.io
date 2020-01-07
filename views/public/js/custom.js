(function ($) {

	"use strict";

	// preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
    
	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();


	// scroll
	var scrollWindow = function() {
		$(window).on('scroll', function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.navbar-light'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();


	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	// typed
	var typed = function () {
		//------- Typed --------// 
		var typed = new Typed('#typed', {
			stringsElement: '#typed-strings',
			backSpeed: 40,
			typeSpeed: 40,
			loop: true
		});
	}
	typed();

	// back to top 
	var back_to_top = function () {
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
	}
	back_to_top();


})(jQuery);

	// isotope
	var $container = $('.work-gallery');
	$container.imagesLoaded().progress(function () {
		$container.isotope();
	});

	$('.work-filter li').on('click', function () {
		$(".work-filter li").removeClass("active");
		$(this).addClass("active");
		var selector = $(this).attr('data-filter');
		$container.imagesLoaded().progress(function () {
			$container.isotope({
				filter: selector,
			});
		});
		return false;
	});
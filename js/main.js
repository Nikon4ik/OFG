document.querySelector('.menuBar_wrapper').onclick = function(){
	document.querySelector('.menuBar').classList.toggle('menuBar_active');
}

$(function() {

    $('.slider').slick({
        dots: false,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		appendArrows: $('.slider-arrow'),
		prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" fill="#1D1D1D"/><g clip-path="url(#clip0)"><path d="M23.2897 30.9635L33.8021 41.6014C34.3277 42.1328 35.1793 42.1328 35.7063 41.6014C36.2319 41.07 36.2319 40.2068 35.7063 39.6753L26.1441 30.0005L35.705 20.3257C36.2306 19.7943 36.2306 18.9311 35.705 18.3983C35.1793 17.8669 34.3264 17.8669 33.8008 18.3983L23.2884 29.0361C22.7708 29.562 22.7708 30.4388 23.2897 30.9635Z" fill="white"/></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white" transform="translate(18 18)"/></clipPath></defs></svg></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="60" width="60" height="60" transform="rotate(-180 60 60)" fill="#1D1D1D"/><g clip-path="url(#clip0)"><path d="M36.6166 29.0374L26.2636 18.3981C25.7459 17.8673 24.9072 17.8673 24.3883 18.3981C23.8706 18.929 23.8706 19.7912 24.3883 20.322L33.8055 29.9993L24.3896 39.6766C23.8719 40.2075 23.8719 41.0697 24.3896 41.6019C24.9072 42.1327 25.7472 42.1327 26.2649 41.6019L36.6179 30.9627C37.1276 30.4373 37.1276 29.5616 36.6166 29.0374Z" fill="white"/></g><defs> <clipPath id="clip0"><rect width="24" height="24" fill="white" transform="translate(42 42) rotate(-180)"/></clipPath></defs></svg><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        responsive: [
			{
			  breakpoint: 480,
			  settings: {
				dots: true
			  }
			}
		  ]
    });

    $(".slider").on('afterChange', function(event, slick, currentSlide){
        $("#cp").text(currentSlide + 1);
     });
});
$(function() {

    $('.adaptiveSlider').slick({
        dots: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		arrows: false
    });
});

$(function () {
	$('.md-trigger').on('click', function() {
		$('.md-modal').addClass('md-show');
		document.body.style.overflow = 'hidden';
	});

	$('.md-close').on('click', function() {
		$('.md-modal').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});

	$('.md-overlay').on('click', function() {
		$('.md-modal').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});
});
$(function () {
	$('.md-offer').on('click', function() {
		$('.documents').addClass('md-show');
		document.body.style.overflow = 'hidden';
	});

	$('.md-close').on('click', function() {
		$('.documents').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});

	$('.md-overlay').on('click', function() {
		$('.documents').removeClass('md-show');
		document.body.style.overflowY = 'auto';
	});

	$('.md-offer').on('click', function() {
		if( $(this).hasClass('offer') ) {
			$('.iframe').attr("src","docs/offer.html");
		}
		else if ( $(this).hasClass('policy') ) {
			$('.iframe').attr("src","docs/policy.html");
		}
		else if ( $(this).hasClass('agreement') ) {
			$('.iframe').attr("src","docs/agreement.html");
		}
		else if ( $(this).hasClass('consent') ) {
			$('.iframe').attr("src","docs/consent.html");
		}
		else if ( $(this).hasClass('coachConsent') ) {
			$('.iframe').attr("src","docs/coachConsent.html");
		}

	});
});
$(function () {
	$('.menuBar_wrapper').on('click', function() {
		$('.menu').toggleClass('md-show');

		if ( $('.menu').hasClass('md-show') )
			document.body.style.overflowY = 'hidden';
		else
			document.body.style.overflowY = 'auto';
	});
});
$(function () {
	$('.menuLink').on('click', function() {
		$('.menu').removeClass('md-show');
		$('.menuBar').removeClass('menuBar_active');
		document.body.style.overflowY = 'auto';
	});
});
$(function () {
	$('.md-trigger').on('click', function() {
		var text = $(this).siblings( 'p' ).text();
		$('.md-modal h3').text(text);
	});
});
$(function () {
	$('.feedback').validate({
		rules: {
			name: {
				required: true
			},
			tel: {
				required: true,
				maxlength: "10",
				minlength: "7",
			},
			email: {
				required: true
			},
		},
		messages: {
			name: {
				required: "Введите имя"
			},
			tel: {
				required: "Введите номер телефона",
				number: "Введите корректный номер телефона",
				maxlength: jQuery.validator.format("Введите корректный номер телефона"),
				minlength: jQuery.validator.format("Введите корректный номер телефона")
			},
			email: {
				required: "Введите e-mail",
				email: "Введите корректный e-mail"
			},
		}
	});
	$('.feedback1').validate({
		rules: {
			name: {
				required: true
			},
			tel: {
				required: true,
				maxlength: "10",
				minlength: "7",
			},
			email: {
				required: true
			},
		},
		messages: {
			name: {
				required: "Введите имя"
			},
			tel: {
				required: "Введите номер телефона",
				number: "Введите корректный номер телефона",
				maxlength: jQuery.validator.format("Введите корректный номер телефона"),
				minlength: jQuery.validator.format("Введите корректный номер телефона")
			},
			email: {
				required: "Введите e-mail",
				email: "Введите корректный e-mail"
			},
		}
	});
});

$(window).scroll(function() {
	if( $(window).scrollTop() != 0 )
		$('.adaptiveHide').css('z-index', 1000);
	else if ( $(window).scrollTop() == 0 )
	$('.adaptiveHide').css('z-index', 1100);
});

$('#element').typeIt({
	strings: ["свое тело", "питание", "режим дня", "привычки", "свое тело"],
	speed: 200,
	breakLines: false,
	waitUntilVisible: true
});

$(window).scroll(function(){
	if( $(this).scrollTop() > 3400 && $(this).scrollTop() < 4150 ) {
		$(".transformation").css('right', -100);
	}
	else {
		$(".transformation").css('right', -1750);
	}
});



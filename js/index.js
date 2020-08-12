$(document).ready(() => {

	const header = $('.header')
	const introH = $('.intro').innerHeight()
	let scrollOffset = $(window).scrollTop()

	// Fixed headers

	checkScroll(scrollOffset)
	
	$(window).on('scroll', () => {
		scrollOffset = $(this).scrollTop()

		checkScroll(scrollOffset)
	})

	function checkScroll(scrollOffset){
		if( ( scrollOffset + 50 ) >= introH ) {
			header.addClass('fixed')
		} else {
			header.removeClass('fixed')
		}
	}

	// Burger menu
	$('.header__burger').on('click', function(){ 
		if ( header.hasClass('active') ) {
			header.find('.header__menu').removeClass('active')
			setTimeout(() => {
				header.removeClass('active')
				header.find('.header__menu a').removeClass('active')
			}, 100)

		} else {
			header.addClass('active')
			header.find('.header__menu a').addClass('active')
			setTimeout(() => {
				header.find('.header__menu').addClass('active')
			}, 200)
		}
	})

	// Page scroll
	function pageScroll(anchor) {
		$(anchor).click(function (e) {
			e.preventDefault()

			const _href = $(this).attr("href");
			$("html, body").animate({
				scrollTop: ($(_href).offset().top - 30) + "px"
			}, 600);

			$('.header').removeClass('active')
			$('.header__menu').removeClass('active')
			$('.header__menu a').removeClass('active')
		});
	}

	pageScroll('a[href="#intro"]')
	pageScroll('a[href="#services"]')
	pageScroll('a[href="#portfolio"]')
	pageScroll('a[href="#about"]')
	pageScroll('a[href="#contact"]')

})
$(document).ready(function () {
	$('.wrapper').addClass('_loaded');
	$('.faq__slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					variableWidth: false,
					centerMode: false,
				},
			},
		],
	});
});

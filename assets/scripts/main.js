$(function() {
	var body = $('body');
	var header = $('header');
	var top = body.offset().top;

	$(window).scroll(function() {
		if ($(window).scrollTop() > top) {
			body.addClass('scrolled');
		}
		else {
			body.removeClass('scrolled');
		}
	});

	$(document).ready(function() {
		$("body").removeClass("preload");

		$('.accomplishments li').click(
			function(){
				$(this).siblings('li').children('div:visible').slideToggle();
				$(this).children('div').slideToggle();
				$(this).toggleClass('expanded');
			}
		);
		$('.skills .expand a').click(
			function(e){
				e.preventDefault();
				$('.additional-skills').slideToggle();
				$('.skills .expand').hide()
			}
		);
	});
});
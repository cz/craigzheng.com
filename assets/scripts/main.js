$(function() {
	var body = $('body');
	var header = $('header');
	var top = $('.qualities').offset().top;

	$(window).scroll(function() {
		if ($(window).scrollTop() >= top - 107) {
			body.addClass('scrolled');
		}
		else {
			body.removeClass('scrolled');
		}
	});

	$(document).ready(function() {
		$("body").removeClass("preload");

		$('.accomplishments li h3').click(
			function(){
				parent = $(this).parents('li');
				parent.siblings('li').children('div:visible').slideToggle();
				parent.children('div').slideToggle();
				parent.toggleClass('expanded');
			}
		);
		$('.skills .expand a').click(
			function(e){
				e.preventDefault();
				$('.additional-skills').slideToggle();
				$('.skills .expand').hide()
			}
		);

		// Event tracking
		$('.action').on('click', function() {
			var label = $(this).attr('id');
			alert(label);
			ga('send', 'event', 'action', 'click', label);
		});
	});
});
jQuery(document).ready(function($) {

	$('.navbar__menu__button').click(function(e) {

		var sidebar = $('.navbar');

		var sidebarWidth = $('.navbar').width();


		$('.navbar__menu__button-img').addClass('hidden');
		$('.navbar__menu__button-img-close').addClass('openmenu');


		if (sidebar.css('left') != sidebarWidth) {

			sidebar.addClass('active');

			var firstClick = true;


			$(document).bind('click.myEvent', function(e) {
				if (!firstClick && $(e.target).closest('.navbar').length == 0) {

					sidebar.removeClass('active');

					$('.navbar__menu__button-img').removeClass('hidden');
					$('.navbar__menu__button-img-close').removeClass('openmenu');
					$(document).unbind('click.myEvent');
				}
				firstClick = false;
			});
		}
		e.preventDefault();
	});
});

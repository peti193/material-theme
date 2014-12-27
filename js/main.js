/*====================================
 =            ON DOM READY            =
 ====================================*/
$(function() {
	$('.hamburger-menu').click(function(e) {
		// Calling a function in case you want to expand upon this.;
		e.preventDefault();
		toggleNav();
	});
});


/*========================================
 =            CUSTOM FUNCTIONS            =
 ========================================*/
function toggleNav() {
	if ($('.site-wrapper').hasClass('show-nav')) {
		// Do things on Nav Close
		$('.site-wrapper').removeClass('show-nav');
	} else {
		// Do things on Nav Open
		$('.site-wrapper').addClass('show-nav');
	}

	//$('#site-wrapper').toggleClass('show-nav');
}


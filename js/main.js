$(function() {
/*========================================
 =       Add item effect |Ripple|        =
 ========================================*/

	var add = $(".plus-icon");
	var close_trigger = $(".close-content");
	var $riple = $(".ripple");
	var $form = $(".form-wrapper");
	var W_height = $(window).height();
	var W_width = $(window).width();
	var nav_bar_bottom = $(".nav-bar-bottom");

	add.click(function(e) {
		var  _this;
		_this = $(this);
		$riple = $(".ripple");

		e.preventDefault();
		$riple.addClass("adding");

		_this.velocity({
			translateZ: 0, // Force HA by animating a 3D property
			translateY: W_height / 2 * -1 + 150,
			translateX: W_width / 2 - 40,
			opacity: "0",
			display: "none"
		},
		{
			duration: 50
		});

		$riple.velocity("fadeIn", {
			delay: 200,
			duration: 50
		});

		$riple.velocity({
			width: "100%",
			height: "100%",
			borderRadius: "0",
			margin: "0",
			left: "0",
			top: "0"

		},
		{
			duration: 150,
			easing: "easeOutQuad",
			complete: function() {
				nav_bar_bottom.html("Add a contact here");
				$form.velocity("fadeIn", { delay: 50, duration: 50 });

				_this.velocity({
					translateZ: 0, // Force HA by animating a 3D property
					translateX: W_width / 2 -40,
					translateY: W_height / 2 -40,
				});

				$form.velocity({
					translateZ: 0, // Force HA by animating a 3D property
					translateY: "160px"
				});
			}
		});
	});


	add.hover(
		function() {
			$(this).velocity({
					translateZ: 0, // Force HA by animating a 3D property
					rotateZ: "180deg",
					scale: "1.2"
				},
				{
					duration: 150,
					easing: "easeOutQuad"
				});
		}, function() {
			$(this).velocity({
					translateZ: 0,
					rotateZ: "0deg",
					scale: "1"
				},
				{
					duration: 150,
					easing: "easeOutQuad"
				});
		}
	);


	close_trigger.click(function(e) {
		e.preventDefault();
		$form.velocity("fadeOut", { delay: 50, duration: 50 });
		$riple.velocity({
				width: "40px",
				height: "40px",
				borderRadius: "50%",
				translateZ: 0, // Force HA by animating a 3D property
				translateX: W_width / 2 -40,
				translateY: W_height / 2 -40
			},
			{
				duration: 150,
				easing: "easeOutQuad",
				complete: function() {
					nav_bar_bottom.html("Contacts");
					$riple.velocity("fadeOut", { delay: 50, duration: 50 });
					add.velocity
					({
						translateZ: 0, // Force HA by animating a 3D property
						translateY: "0",
						translateX: "0"
						},
					{
						duration: 50,
						complete: function() {
							add.velocity("fadeIn", { delay: 50, duration: 50 });
						}
					});
					$riple.velocity({
						translateZ: 0, // Force HA by animating a 3D property
						translateX: "0",
						translateY: "0",
						left: "50%",
						top: "50%"

					});
				}
		});
	});
	
/*========================================
 =            Form animations            =
 ========================================*/


/*========================================
 =            OFF CANVAS                  =
 ========================================*/

	var main_menu_trigger= $(".hamburger-menu");
	var ui_mask = $(".ui-mask");

	main_menu_trigger.click(function() {
		ui_mask.addClass("active");
	});

	ui_mask.click(function() {
		var _this = $(this);
		_this.removeClass("active");
		site_menu.removeClass('show-nav');
	});

	$('.hamburger-menu , .close-nav > a').click(function(e) {
		// Calling a function in case you want to expand upon this.;
		e.preventDefault();
		toggleNav();
	});

	$(".main-menu li a").click(function() {
		site_menu.removeClass('show-nav');
		ui_mask.removeClass("active");

	});
});

/*========================================
 =            CUSTOM FUNCTIONS            =
 ========================================*/
var site_menu = $('.site-menu');

function toggleNav() {
	if (site_menu.hasClass('show-nav')) {
		// Do things on Nav Close
		site_menu.removeClass('show-nav');
	} else {
		// Do things on Nav Open
		site_menu.addClass('show-nav');
	}
}




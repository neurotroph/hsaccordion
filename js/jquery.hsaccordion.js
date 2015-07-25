;(function($) {

	var HSAccordion = function(elem, options) {

		var defaults = {
			firstTab : 1,
			autoPlay : true,
			pauseOnHover : true,
			cycleSpeed : 4000
		},

		settings = $.extend({}, defaults, options),

		tabs = elem.children('li'),
		tabLen = tabs.length,

		methods = {

			// Start autoplay
			play : function() {
				var next = core.nextTab(core.currentTab);

				if (core.playing) return;

				// start autoplay
				core.playing = setInterval(function() {
					core.removeClasses();
					core.currentTab = core.nextTab(core.currentTab);
					tabs.eq(core.currentTab).addClass("hsa-active");
				}, settings.cycleSpeed);
			},

			stop : function() {
				clearInterval(core.playing);
				core.playing = 0;
				core.removeClasses();
			},

			next : function() {
				methods.stop();
				// show next slide
			},

			prev : function() {
				methods.stop();
				// show prev slide
			},

			destroy : function() {
				methods.stop();

				// we don't destroy anything else
			},

			debug : function() {
				return {
					elem : elem,
					defaults : defaults,
					settings : settings,
					methods : methods,
					core : core
				};
			}
		},

		core = {

			bindEvents : function() {
				// pause on hover
				if (settings.pauseOnHover && settings.autoPlay) {
					elem
						.on('mouseover', function() {
							if (core.playing)
								methods.stop();
						})
						.on('mouseout', function() {
							if (!core.playing) {
								methods.play();
							}
						});
				}
			},

			currentTab : settings.firstTab - 1,

			nextTab : function(index) {
				return (index+1) % tabLen;
			},

			removeClasses : function() {
				tabs.each(function(index) {
					$(this).removeClass("hsa-active");
				})
			},

			playing : 0,

			init : function() {
				core.bindEvents();
				if (settings.autoPlay) {
					tabs.eq(core.currentTab).addClass("hsa-active");
					methods.play();
				}
			}

		};

		core.init();

		return methods;

	};

	$.fn.hsAccordion = function(method) {
		var elem = this,
			instance = elem.data('hsAccordion');

		if (typeof mehtod === 'object' || !method) {
			return elem.each(function() {
				var hsAccordion;

				if (instance) return;

				hsAccordion = new HSAccordion(elem, method);
				elem.data('hsAccordion', hsAccordion);
			});
		} else if (typeof method === 'string' && instance[method]) {
			if (method === 'debug') {
				return instance[method].call(elem);
			} else {
				instance[method].call(elem);
				return elem;
			}
		}
	}

})(jQuery);
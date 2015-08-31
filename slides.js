$(document).ready( function() {

	var container = $('#container');

	var slidesBtn = $('<button>').attr('id', 'slidesBtn');
	var outlineBtn = $('<button>').attr('id', 'outlineBtn');

	slidesBtn.text('Slides');
	outlineBtn.text('Outline');

	$(container).append(slidesBtn);
	$(container).append(outlineBtn);

	$(slidesBtn).on('click', function() {
		console.log(container);
		$(container).addClass('slides');
		$(container).removeClass('outline');
	});
	$(outlineBtn).on('click', function() {
		$(container).removeClass('slides');
		$(container).addClass('outline');
	});

	var getSlideNumber = function() {
		slideNumber = 0;
		for ( var i = 0; i < slides.length; i++) {
			if ( startingOffset > $(slides[i]).offset().top ) {
				slideNumber++;
			}
		}
	};


	var slides = $('.slide');
	var slideNumber = 0;
	var startingOffset = $(document).scrollTop();
	var numSlides = slides.length;
	getSlideNumber();

	
	var nextSlide = function() {
		if (slideNumber < numSlides - 1) {
			slideNumber++;
			$('body, html').animate({
				scrollTop: $(slides[slideNumber]).offset().top
			}, 500);
		}
	};

	var previousSlide = function() {
		if (slideNumber > 0) {
			slideNumber--;
			$('body, html').animate({
				scrollTop: $(slides[slideNumber]).offset().top
			}, 500);
		}
	};



	$(document).on('keydown', function(ev) {
		var key = ev.which;
		switch (key) {
			case 39: 
			case 40:
				nextSlide();
			break;
			
			case 37:
			case 38:
				previousSlide();
			break;
		}
	});

});
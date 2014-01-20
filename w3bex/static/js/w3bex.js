
var w3bex = {}

w3bex.init = function(){

	// Initialize w3bexSlider
	this.slider = new w3bexSlider({
		interval: 3,
		sliderId: "home-slider"
	});

	// Start slideshow
	this.slider.play();

	// Adjust first section to fill the window
	this.resizeFirstSection();
	window.onresize = this.resizeFirstSection;

	// Initialize smooth scrolling
	$('nav a').smoothScroll({
		speed: 1500,
		easing: 'easeOutQuint'
	});

	// Adjust offsets for parallax and anchors
	this.recalculateOffsets();
	window.onresize = this.recalculateOffsets;

	// Initializing parallax effects
	$(window).stellar({
		responsive: true
	});
}

w3bex.recalculateOffsets = function(){
	$('.anchor').each(function(idx, el){

		win_height = window.innerHeight;
		section = $(el).next();

		// When the section element is larger, do not calculate offset
		if (section.height() <= win_height){
			offset = -(25 + (( win_height - section.height())/2));
		}else{
			offset = -51;
		}
		$(el).css('top', offset);

		// Calculate parallax offset, need a way to reinitialize stellar instance
		parallax_offset = Math.floor(46 + ((window.innerHeight - $(el).next().height())/2));
		$(el).next().attr('data-stellar-vertical-offset', parallax_offset);
	})
}

w3bex.resizeFirstSection = function(){
	$('section.slider').css('height', window.innerHeight - $('header').height());
}

$(document).ready(function(){
	w3bex.init();
});


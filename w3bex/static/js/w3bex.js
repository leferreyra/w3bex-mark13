
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
		offset = -(25 + ((window.innerHeight - $(el).next().height())/2));
		$(el).css('top', offset);
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


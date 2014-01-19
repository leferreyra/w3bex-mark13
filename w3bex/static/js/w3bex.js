
var w3bex = {}

w3bex.init = function(){

	this.slider = new w3bexSlider({
		interval: 3,
		sliderId: "home"
	});

	this.resizeFirstSection();
	this.slider.play();
}

w3bex.resizeFirstSection = function(){
	$('section.slider').css('height', window.innerHeight - 51);
}

$(document).ready(function(){
	w3bex.init();
});


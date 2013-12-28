KEY_UP = 38;
KEY_DOWN = 40;

var w3bex = {}

w3bex.init = function(){

	// Main Site Elements
	w3bex.main_window = $("#main-window");

	w3bex.setMainWindowHeight();
	window.onresize = w3bex.setMainWindowHeight;
}


w3bex.setMainWindowHeight = function(){

	w3bex.window_height = window.innerHeight;
	w3bex.header_height = $('header').height()
	w3bex.main_window_height = w3bex.window_height - w3bex.header_height;

	w3bex.main_window.height(w3bex.main_window_height);
	w3bex.main_window.find('.inner-window').height(w3bex.main_window_height);
}

$(document).ready(function(){
	w3bex.init();
});


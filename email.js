var checkEmail = function() {
	var regexp = /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/;
	var email = document.getElementById('email-input').value;
	if (email === '') 
		removeFrame();
	else if (regexp.test(email))
		drawFrame('green');
	else
		drawFrame('red');
};

var removeFrame = function() {
	var input = document.getElementById('email-input');
	input.parentNode.style.backgroundColor = input.parentNode.parentNode.style.backgroundColor;
};

var drawFrame = function(color) {
	var input = document.getElementById('email-input');
	input.parentNode.style.backgroundColor = color;
};


window.onload = function() {
	document.getElementById('email-input').onkeyup = checkEmail;
};
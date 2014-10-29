var checkEmail = function() {
	var regexp = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
	var email = document.getElementById('email-input').value;
	if (email == '') 
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
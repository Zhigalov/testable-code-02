var fillEmail = function(browser, email) {
	var currentInput = browser.evaluate(function() {
		return document.getElementById('email-input').value;
	});
	for (var i=0; i<currentInput.length; i++) {
		browser.sendKeys('#email-input', casper.page.event.key.Backspace);
	}
	browser.sendKeys('#email-input', email, {reset: true});
};

var getValidation = function(browser) {
	var color = browser.evaluate(function () {
		return document.getElementById('email-input').parentNode.style.backgroundColor;
	});
	return color;
};

var validate = function(browser, email) {
	fillEmail(browser, email);
	return getValidation(browser);
};

casper.test.begin('Validation testing', function suite(test) {
	casper.start('http://localhost:8000/email.html')
		   .then(function() {
				test.assertEquals(validate(this, 'uskovm@gmail.com'), 'green', 'uskovm@gmail.com (right)');
				test.assertEquals(validate(this, 'vnbgfjbndkjnv'), 'red', 'vnbgfjbndkjnv (wrong)');
				test.assertEquals(validate(this, 'uskovm@gmail.com'), 'green', 'michaeluskov@ya.ru (right)');
				test.assertEquals(validate(this, ''), '', 'Blank input');
				test.assertEquals(validate(this, 'uskovm@[192.168.0.1]'), 'green', 'uskovm@[192.168.0.1] (right)');
				test.assertEquals(validate(this, '@[192.168.0.1]'), 'red', '@[192.168.0.1] (wrong)');
		   }).run(function() {
		test.done();
	});
	
});
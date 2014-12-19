var checking = function(browser, e_mail){
	browser.fill('#input_email', {'for_email': e_mail}, false);
	// browser.echo(browser.getFormValues('#input_email').for_email)
	browser.click('#checker');
	var color = browser.getElementAttribute('input[id="e_mail"]', 'style');
	var reg = /background-color: (.+);/;
	var color = reg.exec(color);
	return color[1];
}

casper.test.begin('Validation testing', function suite(test) {
	casper.start('file:///C:/Users/%D0%98%D0%B3%D0%BE%D1%80%D1%8C/Desktop/Institute/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81/testable-code-02/site.html')
			.then(function() {
				test.assertEquals(checking(this, ''), 'white');
				test.assertEquals(checking(this, 'Ultimate95@mail.ru'), 'green');
				test.assertEquals(checking(this, '123'), 'red');
				test.assertEquals(checking(this, 'Savichev95@gmail.com'), 'green');
				test.assertEquals(checking(this, 'azazaza@'), 'red');
			}).run(function() {
		test.done();
	});	
});
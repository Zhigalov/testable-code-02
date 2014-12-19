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
	casper.start('http://localhost:8000/site.html')
			.then(function() {
				test.assertEquals(checking(this, 'Ultimate95@mail.ru'), 'green');
				test.assertEquals(checking(this, '123'), 'red');
				test.assertEquals(checking(this, 'Savichev95@gmail.com'), 'green');
				test.assertEquals(checking(this, 'azazaza@'), 'red');
			}).run(function() {
		test.done();
	});	
});
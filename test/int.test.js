casper.test.begin('validation email', function () {
	casper.start('../index.html', function () {
function object () {
	return casper.evaluate(function () {
        	return document.querySelector('#inputEmail');
        });
}
		this.sendKeys('#inputEmail', 'valid@gmail.com');
		this.test.assertEquals(object().className, 'goodEmail')

        this.sendKeys('#inputEmail', '', {reset: true});
        this.sendKeys('#inputEmail', casper.page.event.key.Enter);
		this.test.assertEquals(object().className, 'none')

		this.sendKeys('#inputEmail', 'inv@ld@gmail.com');
		this.test.assertEquals(object().className, 'badEmail')
	});
});

casper.run();
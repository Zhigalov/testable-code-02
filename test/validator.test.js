

casper.test.begin('Page behaviour tests', function suite(test) {
    casper.start('http://localhost:63342/email%20validation/index.html', function() {

        // valid emails
        this.sendKeys('#email', 'example@example.com');
        var currentClass = casper.evaluate(function () {
            return document.getElementById('email').className;
        });
        this.test.assertEquals(currentClass, 'valid-email');
        this.sendKeys('#email', '',{reset:true});

        this.sendKeys('#email', 'abc123@abc.ru');
        var currentClass = casper.evaluate(function () {
            return document.getElementById('email').className;
        });
        this.test.assertEquals(currentClass, 'valid-email');
        this.sendKeys('#email', '',{reset:true});

        //invalid emails
        this.sendKeys('#email', 'invalid@email');
        currentClass = casper.evaluate(function () {
            return document.getElementById('email').className;
        });
        this.test.assertEquals(currentClass, 'invalid-email');
        this.sendKeys('#email', '',{reset:true});

        this.sendKeys('#email', 'abc@abc.r');
        var currentClass = casper.evaluate(function () {
            return document.getElementById('email').className;
        });
        this.test.assertEquals(currentClass, 'invalid-email');
        this.sendKeys('#email', '',{reset:true});
    })
        .run(test.done.bind(test));
});
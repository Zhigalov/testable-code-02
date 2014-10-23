function getOutValue() {
    return casper.evaluate(function () {
        return document.querySelector('#out').value;
    });
}

casper.test.begin('Wait tests', function (test) {
    casper
        .start('http://localhost:3000/', function () {
            this.sendKeys('#in', '100');

            this.click('#convert');
        })
        .wait(2000, function () {
            var actual = getOutValue();
            this.test.assertEquals('3.1', actual);
        })
        .run(function () {
            test.done();
        });
});

casper.test.begin('Wait for tests', function (test) {
    casper
        .start('http://localhost:3000/', function () {
            this.sendKeys('#in', '100');

            this.click('#convert');
        })
        .waitFor(getOutValue, function () {
            var actual = getOutValue();
            this.test.assertEquals('3.1', actual);
        })
        .run(function () {
            test.done();
        });
});
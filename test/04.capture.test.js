0 && casper.test.begin('Capture', function suite(test) {
    casper
        .start('http://localhost:63342/05-tests/urlEncoded.html', function () {
            this.capture('before.png', {
                top: 0,
                left: 0,
                width: 800,
                height: 600
            }, {
                format: 'png',
                quality: 75
            });
        })
        .run(function () {
            test.done();
        });
});

0 && casper.test.begin('Capture after resize', function suite(test) {
    casper
        .start('http://localhost:63342/05-tests/urlEncoded.html', function () {
            casper.viewport(800, 600, function () {
                this.capture('before.png', {
                    top: 0,
                    left: 0,
                    width: 800,
                    height: 600
                });
            });
        })
        .run(function () {
            test.done();
        });
});

casper.test.begin('Capture', function suite(test) {
    casper
        .start('http://localhost:63342/05-tests/urlEncoded.html', function () {
            var before = this.captureBase64('png', { top: 0, left: 0, width: 800, height: 600 });

            this.sendKeys('#in', '1 2A');
            this.click('#convert');
            var actual = casper.evaluate(function () {
                return document.querySelector('#out').value;
            });
            this.test.assertEquals(actual, '1%202A');

//            this.sendKeys('#in', '', {reset: true});
//            this.sendKeys('#out', '', {reset: true});
            this.capture('before.png', {
                top: 0,
                left: 0,
                width: 800,
                height: 600
            });

            var after = this.captureBase64('png', { top: 0, left: 0, width: 800, height: 600 });
//            this.test.assertEquals(before, after, 'Images equals');
        })
        .run(test.done.bind(test));
});

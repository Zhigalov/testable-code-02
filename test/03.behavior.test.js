casper.test.begin('Page behavior tests', 1, {
    setUp: function () {
        // Do something before
    },

    tearDown: function () {
        // Do something after
    },

//    test: function (test) {
//        casper
//            .start('http://localhost:63342/05-tests/urlEncoded.html', function () {
//                this.sendKeys('#in', '1 2A');
//
//                this.click('#convert');
//
//                var actual = casper.evaluate(function () {
//                    return document.querySelector('#out').value;
//                });
//                this.test.assertEquals('1%202A!', actual);
//            })
//            .run(function () {
//                test.done();
//            });
//    }

    test: function (test) {
        casper
            .start('http://localhost:63342/05-tests/urlEncoded.html', function () {
                this.sendKeys('#in', '1 2A');
            })
            .thenClick('#convert', function () {
                var actual = casper.evaluate(function () {
                    return document.querySelector('#out').value;
                });
                this.test.assertEquals(actual, '1%202A');
            })
            .run(test.done.bind(test));
    }
});

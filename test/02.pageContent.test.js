casper.test.begin('Page content tests', function suite(test) {
    casper
        .start('http://localhost:63342/05-tests/urlEncoded.html', function () {
            test.assertTitle('URL encoded', 'title is the one expected');

            test.assertExists('#in');
            test.assertSelectorHasText('#for_out', 'Result');
            test.assertVisible('#out');
        })
        .run(function () {
            test.done();
        });
});


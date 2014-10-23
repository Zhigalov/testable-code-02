var casper = require('casper').create();

casper.start('http://localhost:63342/05-tests/urlEncoded.html', function () {
    this.echo(this.getTitle());
});

casper.run();

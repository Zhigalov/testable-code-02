var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var fs = require('fs');

// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}


describe.only('Page', function () {
    before(function () {
        browser.ignoreSynchronization = true;
        browser.get('/');
    });

    it('should have encode data', function () {
        var input = element(by.id('in')),
            button = element(by.id('convert')),
            output = element(by.id('out'));

        input.sendKeys('100')
            .then(button.click.bind(button))
            .then(function () {
                browser.wait(output.getAttribute.bind(output, 'value'), 300, 'Output is empty');
            })
            .then(output.getAttribute.bind(output, 'value'))
            .then(function (data) {
                expect(data).to.equal('3.1');
            })
            .then(browser.takeScreenshot.bind(browser))
            .then(function (png) {
                writeScreenShot(png, 'my_screenshot.png');
            });
    });
});

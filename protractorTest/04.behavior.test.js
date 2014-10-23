var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe.only('Page', function () {
    before(function () {
        browser.ignoreSynchronization = true;
        browser.get('05-tests/urlEncoded.html');
    });

    it('should have encode data', function () {
        var input = element(by.id('in')),
            button = element(by.id('convert')),
            output = element(by.id('out'));

        input.sendKeys('1 2A')
            .then(button.click.bind(button))
            .then(function () {
                return 'value';
            })
            .then(output.getAttribute.bind(output))
            .then(function (data) {
                expect(data).to.equal('1%202A');
                browser.sleep(10000);
            });
    });
});

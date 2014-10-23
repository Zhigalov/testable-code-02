var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe.only('Page', function () {
    before(function () {
        browser.ignoreSynchronization = true;
        browser.get('05-tests/urlEncoded.html');
    });

    it('should have a content', function () {
        var input = element(by.id('in')),
            label = element(by.id('for_out')),
            output = element(by.id('out'));

        expect(input.isPresent()).to.eventually.be.true;
        label.getText().then(function (actual) {
            expect(actual).to.equal('Result');
        });
        expect(output.isDisplayed()).to.eventually.be.true;
    });
});

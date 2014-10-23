var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Page', function () {
    it('should have a title', function () {
        browser.ignoreSynchronization = true;
        browser.get('05-tests/urlEncoded.html');

        expect(browser.getTitle()).to.eventually.equal('URL encoded');
    });
});

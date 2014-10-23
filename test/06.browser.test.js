describe('Example test', function () {
    it('should check `encodeURIComponent`', function () {
        var actual = encodeURIComponent('1 2A');
        expect(actual).to.equal('1%202A');
    });
});
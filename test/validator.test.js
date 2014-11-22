casper.test.begin('Verification of e-mail.', function suite(test)
{
    casper.start('http://localhost:63342/testable_code/index.html', function()
    {
        test.assertEquals(validate(this, ''), 'wait', '1. empty test ("")');

        test.assertEquals(validate(this, 'test@test.ru'), 'valid', '2. valid e-mail (test@test.ru)');
        test.assertEquals(validate(this, 't_e_s_t@t_e_s_t.com'), 'valid', '3. valid e-mail (t_e_s_t@t_e_s_t.com)');

        test.assertEquals(validate(this, 'test@test'), 'invalid', '4. invalid e-mail (test@test)');
        test.assertEquals(validate(this, 'test_string'), 'invalid', '5. invalid e-mail (test_string)');
    }).run(function()
    {
        test.done();
    });
});

function _input(browser, string)
{
    browser.sendKeys('#email', string);
    browser.sendKeys('#email', '', { reset : true });
}

function _getValidate(browser)
{
    return casper.evaluate(function()
    {
        return document.getElementById('email').className;
    });
}

function validate (browser, string)
{
    _input(browser, string);
    return _getValidate(browser);
}
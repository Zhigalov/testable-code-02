exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        '05.wait.test.js',
//        '06.screenshot.test.js'
    ],
    framework: 'mocha',
    mochaOpts: {
        reporter: 'spec',
        timeout: 40000
    },
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        'version': 'ANY'
    },

    // A base URL for your application under test.
    baseUrl: 'http://localhost:3000'
};
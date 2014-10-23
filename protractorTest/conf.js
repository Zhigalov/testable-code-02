exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: [
        '01.title.test.js',
//        '02.title.test.js',
//        '03.pageContent.test.js',
//        '04.behavior.test.js'
    ],
    framework: 'mocha',
    mochaOpts: {
        reporter: 'spec',
        timeout: 4000
    },
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        'version': 'ANY'
    },

    // A base URL for your application under test.
    baseUrl: 'http://localhost:63342'
};
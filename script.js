var validate = function() {
    var element = document.getElementById('email');
    var email = element.value;
    var pattern = /^([a-z0-9_\.-]+)@([a-z0-9_-]+)\.([a-z]{2,})$/i;
    if (!email) {
        element.className = '';
    } else if (pattern.test(email)) {
        element.className = 'valid-email';
    }
    else {
        element.className = 'invalid-email';
    }
};


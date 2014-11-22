var validator = function() 
{
    var element = document.getElementById("email");
    var email   = element.value;
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

    if (!email) {
        element.className = "wait";
	} else {
        if (pattern.test(email)) {
            element.className = "valid";
		} else {
            element.className = "invalid";
		}
	}
};
var validator = function() 
{
    var element = document.getElementById("email");
    var email   = element.value;
    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

    if (!email) 
        element.className = "wait";
    else 
        if (pattern.test(email)) 
            element.className = "valid";
        else 
            element.className = "invalid";
};
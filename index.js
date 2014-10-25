/** Email check application
 *
 * @param {DOM element} elem
 */
var Checker = function(elem) {
  elem.onkeyup = function(evt) {
      evt.preventDefault();
      var isValid = isValidEmail(this.value);
      if(isValid) {
        elem.className = "auth_ok";
      } else {
        elem.className = "auth_error";
      }
  };

  var isValidEmail = function(email) {
      var atpos = email.indexOf("@");
      var dotpos = email.lastIndexOf(".");
      if(atpos <  1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        return false;
      } else {
        return true;
      }
  };
};

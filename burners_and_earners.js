var splitString = function(string, separator) {
var arrayOfStrings = string.split(separator);
  return arrayOfStrings;
  }


var cleanMystring = function(arrayOfStrings){
  var cleanString = [];
    user.forEach(function(string) {
      string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      cleanString.push(string);
    });

    return cleanString;
  }


  exports.applications = function(cleanString) {
    var userApplications = []
    for (i = 0; i < cleanString.length; i++) {
      if (cleanString[i] === "Faceblock" || cleanString[i] === "Instantgam" || cleanString[i] === "Snaptalk" || cleanString[i] === "Tooter" || cleanString[i] === "LankedOn") {

        userApplications.push(cleanString[i]);
      }
    }
    return userApplications;

  }

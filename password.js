var generateBtn = document.querySelector("#generate");

var numString = "0123456789";
var numArray = numString.split("");
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerString.split("");
var upperArray = lowerString.toUpperCase().split("");
var specialString = "!@#$%^&*";
var specialArray = specialString.split("");

function askForOptions() {
  var passLength = parseInt(prompt(" Please choose a number"));
  var isLower = (prompt("Please choose a lowercase letter"));
  var isUpper = (prompt("Please choose a upper letter"));
  var isSpecial = (prompt("Please choose a special character"));
 
  var isNum = confirm("you have chosen a number");
  var isLower = confirm("you have chosen a lower case letter");
  var isUpper = confirm("you have chosen a upper case letter");
  var isSpecial = confirm("you have chosen a special character");
 

  var options = {
    passLength,
    isNum,
    isLower,
    isUpper,
    isSpecial
  }
  return options
}
function generatePassword() {
  var options = askForOptions();
  console.log(options);
  var superArray = [];
  var result = [];
  
  if(options.isNum) {
    superArray = superArray.concat(numArray)

  }
  if(options.isLower) {
    superArray = superArray.concat(lowerArray)
  }
  if(options.isUpper) {
    superArray = superArray.concat(upperArray)
  }
  if(options.isSpecial) {
    superArray = superArray.concat(specialArray)
  }
  console.log(superArray)

  for(var i = 0; i < options.passLength; i ++) {
    var index = Math.floor(Math.random() * superArray.length);
    var digit = superArray[index];
    result.push(digit);
  }
  return result.join("")
  console.log(join)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);


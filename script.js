var generateBtn = document.querySelector("#generate");
var lowerLib = "abcdefghijklmnopqrstuvwxyz";
var upperLib = lowerLib.toUpperCase();
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "0123456789";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;
}


function generatePassword() {
  var newPassword = "";
  var passLib = "";
  var passLength = parseInt(prompt("Choose password length (8-128 characters)"));

  if (passLength >= 8 && passLength <= 128) {
    console.log(passLength);
  } else {
    alert("Invalid input. Please enter a number between 8 and 128.");
    generatePassword();
  }

  var lowerCase = confirm("Would you like to include Lower Case Letters?");
  var upperCase = confirm("Would you like to include Upper Case Letters?");
  var num = confirm("Would you like to include Numbers?");
  var specChar = confirm("Would you like to include Special Characters?");

  if (!lowerCase && !upperCase && !num && !specChar) {
    alert("Please choose at least one character type for your password");
    generatePassword();
  }

  if (lowerCase) {
    passLib += lowerLib;
  }
  if (upperCase) {
    passLib += upperLib;
  }
  if (num) {
    passLib += numbers;
  }
  if (specChar) {
    passLib += specialChars;
  }

  for (var i = 0; i < passLength; i++) {
    var placeHold = Math.floor(Math.random() * passLib.length);
    newPassword += passLib[placeHold];
  }

  return newPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


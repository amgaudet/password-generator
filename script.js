// Assignment Code
// hw notes
// declare generatePassword() to get something back (the new password)
// double check variable scope. is password resetting before making a new one?
var generateBtn = document.querySelector("#generate");
var lowerLib = "abcdefghijklmnopqrstuvwxyz";
var upperLib = lowerLib.toUpperCase();
var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "0123456789";


// Write password to the #password input
function writePassword() {
  var newPassword = "";
  var passLib = "";
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //password length prompt 8-128 characters
  var passLength = parseInt(prompt("Choose password length (8-128 characters)"));

  //check if pw length is between 8 and 128
  if (passLength >= 8 && passLength <= 128) {
    console.log(passLength);
  } else {
    alert("Invalid input. Please enter a number between 8 and 128.");
    writePassword();
  }

  //checks for what character types to add to pw
  var lowerCase = confirm("Would you like to include Lower Case Letters?");
  var upperCase = confirm("Would you like to include Upper Case Letters?");
  var num = confirm("Would you like to include Numbers?");
  var specChar = confirm("Would you like to include Special Characters?");

  //builds library of chars based on client input
  if (!lowerCase && !upperCase && !num && !specChar) {
    alert("Please choose at least one character type for your password");
    writePassword();
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

  console.log(passLib);

  //adds random characters to newPassword based on input length
  for (var i = 0; i < passLength; i++) {
    //generate random number 0-password library length
    var placeHold = Math.floor(Math.random() * passLib.length);

    //adds character from random spot to password
    newPassword += passLib[placeHold];

  }

  return newPassword;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


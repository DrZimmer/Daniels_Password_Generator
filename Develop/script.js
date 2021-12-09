// Assignment code here

var special_chars = [""]
var lowercase_letters = [""]
var uppercase_letters = [""]
var numeric = [1, 2, 3, 4]
var possible_characters = [all vars above separated by comma]
var test = lowercaseletters concat

var password = ''
for (var i = 0; i < 3; i++) {
  var randomChar = possible_characters[3];
  var randomChar = possible_characters[math.floor(Math.random() * possible_characters.length + 1)];
  password = password + String(randomChar)
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here

var specialCharacters =  ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z";
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var possible_characters = [lowercaseLetters, uppercaseLetters, numeric, specialCharacters]
//var test = lowercaseletters concat

var password = ''
for (var i = 0; i < 3; i++) {
  var randomChar = possible_characters[3];
  var randomChar = possible_characters[math.floor(Math.random() * possible_characters.length + 1)];
  password = password + String(randomChar)
};

var passwordRequirements = function() {


  generatePassword();
}

var generatePassword = function () {



}

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

writePassword();
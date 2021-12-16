// Daniel Zimmermann's Password Generator

var specialCharacters =  ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 

//So, you create an object that should store these properties
// PasswordLength, - Number
// HasUpperCase, - Boolean
// HasLowerCase, - Boolean
// HasNumber, - Boolean
// HasSymbol - Boolean 
// //Then you in your password generator function,  
// //you check if any of these Boolean properties is true,
//you add the letters, or symbols, or numbers or lowercase in to an array

// var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

//   // Conditional Recursive Function Call
//   if (promptFight === "" || promptFight === null) {
//     window.alert("You need to provide a valid answer! Please try again.");
//     return fightOrSkip();
//   }

//function to receive user input and create object that stores their preferences
var passwordRequirements = function() {
  var promptLength = window.prompt('How many characters would you like your password to be? (8-128)')
  if (promptLength >= 8 && promptLength<= 128) {
    const passwordLength = promptLength
  } else {
    window.alert("Please select a number between or including 8 and 128");
    return passwordRequirements();
  }

  var passwordVariablesObj = [ {

  }]
  console.log(passwordLength)
  writePassword();
  generatePassword();
};

function getRandomLower() {
  let value = Math.floor(Math.random() * lowercaseLetters.length);
  value = lowercaseLetters[value]
  return value;
};

function getRandomUpper() {
  let value = Math.floor(Math.random() * lowercaseLetters.length);
  value = uppercaseLetters[value]
  return value;
};

console.log(getRandomLower());
console.log(getRandomUpper());

//turn this into an object so i can just do one function
//passwordRequirements [{upper: [list of chars], lower: [list of chars], etc}]

var passwordRequirements = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumberCharacters: hasNumberCharacters,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters
};


//var test = lowercaseletters concat

// var password = ''
// for (var i = 0; i < 3; i++) {
//   var randomChar = possible_characters[3];
//   var randomChar = possible_characters[math.floor(Math.random() * possible_characters.length + 1)];
//   password = password + String(randomChar)
// };

var generatePassword = function () {
//set password length = to password length selected
//if hasUpperCase is true do this (randomize and pick)
//if hasLowerCase ios true, ^
//if hasNumber is true, ^
//if hasSymbol is true, ^

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
generateBtn.addEventListener("click", passwordRequirements());
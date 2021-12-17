// Daniel Zimmermann's Password Generator

var specialCharacters =  ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
var length = ''

var passwordRequirements = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumberCharacters: hasNumberCharacters,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters
};
// //in your password generator function,  
// //you check if any of these Boolean properties is true,
//you add the letters, or symbols, or numbers or lowercase in to an array!!!

var generatePassword = function () {
//set password length = to password length selected
//if hasUpperCase is true do this (randomize and pick)
//if hasLowerCase ios true, ^
//if hasNumber is true, ^
//if hasSymbol is true, ^
var tenure = prompt("Please enter preferred tenure in years", "15");
    
if (tenure != null) {
    alert("You have entered " + tenure + " years" );
}
  const length = window.prompt('How many characters would you like your password to be?', '8-128');
  if (length >= 8 && length <= 128) {
    const length = length;
  } else {
    window.alert("Please select a number between or including 8 and 128");
    return generatePassword();
  };

  console.log(generatePassword());
  console.log(length);
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

//var test = lowercaseletters concat HAVE TO USE THIS SOMEWHERE?

//and this
// var password = ''
// for (var i = 0; i < 3; i++) {
//   var randomChar = possible_characters[3];
//   var randomChar = possible_characters[math.floor(Math.random() * possible_characters.length + 1)];
//   password = password + String(randomChar)
// };


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
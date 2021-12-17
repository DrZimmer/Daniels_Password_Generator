// Daniel Zimmermann's Password Generator

var specialCharacters =  ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
var length = ''
var characterArr = [specialCharacters, lowercaseLetters, uppercaseLetters, numeric];

// //in your generatePassword function,  
// //you check if any of these Boolean properties above are true,
//you add the letters, or symbols, or numbers or lowercase in to an array!!!

var generatePassword = function () {
  //Ask user how many characters to include in the generated password
  const length = prompt('How many characters would you like your password to be?', '8-128');
  if (length >= 8 && length <= 128) {
    window.alert("You have selected " + length + " characters for your password.")
  } else {
    window.alert("Please select a number between or including 8 and 128");
    return(generatePassword())
    };
  //Ask user if they want special, number, lowercased, uppercased characters in the generated password
  const hasSpecialCharacters = confirm('Would you like to include special characters in your password? Ok for YES, cancel for NO.');
    if (hasSpecialCharacters === true) {
      window.alert("You have chosen to include special characters in your password");
    } else {
      window.alert("You have chosen NOT to include special characters in your password");
    }
  const hasNumberCharacters = confirm('Would you like to include number characters in your password? Ok for YES, cancel for NO.');
    if (hasNumberCharacters === true) {
      window.alert("You have chosen to include number characters in your password");
    } else {
      window.alert("You have chosen NOT to include number characters in your password");
    }
  const hasLowerCasedCharacters = confirm('Would you like to include lower case characters in your password? Ok for YES, cancel for NO.');
    if (hasLowerCasedCharacters === true) {
      window.alert("You have chosen to include lower case characters in your password");
    } else {
      window.alert("You have chosen NOT to include lower case characters in your password");
    }
  const hasUpperCasedCharacters = confirm('Would you like to include upper case characters in your password? Ok for YES, cancel for NO.');
    if (hasUpperCasedCharacters === true) {
      window.alert("You have chosen to include upper case characters in your password");
    } else {
      window.alert("You have chosen NOT to include upper case characters in your password");
    }

console.log(hasNumberCharacters);
console.log(hasLowerCasedCharacters);
console.log(hasUpperCasedCharacters);
console.log(hasSpecialCharacters);
console.log(length);
};

//OBJECT TO BE CREATED
// var passwordRequirements = {
//   length: length,
//   hasSpecialCharacters: hasSpecialCharacters,
//   hasNumberCharacters: hasNumberCharacters,
//   hasLowerCasedCharacters: hasLowerCasedCharacters,
//   hasUpperCasedCharacters: hasUpperCasedCharacters
// };

//WORK ON THIS RANDOM FUNCTION TO 
function random(characterArr) {
  let value = Math.floor(Math.random() * lowercaseLetters.length);
  value = lowercaseLetters[value]
  return value;
};
// function getRandomUpper() {
  //   let value = Math.floor(Math.random() * lowercaseLetters.length);
  //   value = uppercaseLetters[value]
  //   return value;
  // };
  
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
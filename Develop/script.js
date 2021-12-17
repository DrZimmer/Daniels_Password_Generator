// Daniel Zimmermann's Password Generator

var specialCharacters =  ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 

var passwordRequirements = function () {
  
  //Ask user how many characters to include in the generated password
  const passwordLength = prompt('How many characters would you like your password to be?', '8-128');
  if (passwordLength >= 8 && passwordLength <= 128) {
    window.alert("You have selected " + passwordLength + " characters for your password.")
  } else {
    window.alert("Please select a number between or including 8 and 128");
    return(generatePassword())
    };
  console.log(passwordLength);
  //Ask user if they want special, number, lowercased, uppercased characters in the generated password... then validates what they selected.
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
    };
    if (hasSpecialCharacters === false && hasNumberCharacters === false && hasLowerCasedCharacters === false && hasUpperCasedCharacters === false) {
      window.alert("You haven't chosen ANY character types! START OVER!");
    }
    //passwordRequirements object to be referenced in generate password
    const passwordRequirementsObj = {
      passwordLength: passwordLength,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumberCharacters: hasNumberCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    };
    return passwordRequirementsObj;
  };

var generatePassword = function () {
  console.log(passwordLength);
  var requirements = passwordRequirements();

  var finalPassword = [];

  var maybeCharacters = [];

  var mustHaveCharacters = [];

  //check if password requirements object exists, if not exit.
  if (!requirements) return null;

  if (requirements.hasUpperCasedCharacters) {
    maybeCharacters = maybeCharacters.concat(uppercaseLetters);
    mustHaveCharacters.push(getRandom(uppercaseLetters));
  }
  if (requirements.hasLowerCasedCharacters) {
    maybeCharacters = maybeCharacters.concat(lowercaseLetters);
    mustHaveCharacters.push(getRandom(lowercaseLetters));
  }
  if (requirements.hasNumberCharacters) {
    maybeCharacters = maybeCharacters.concat(numeric);
    mustHaveCharacters.push(getRandom(numeric));
  }
  if (requirements.hasSpecialCharacters) {
    maybeCharacters = maybeCharacters.concat(specialCharacters);
    mustHaveCharacters.push(getRandom(specialCharacters));
  }
  console.log(passwordLength);
  console.log(maybeCharacters);
  console.log(mustHaveCharacters);
  for(var i = 0; i < requirements.passwordLength; i++) {
    var character = getRandom(maybeCharacters);
    finalPassword.push(character);
    console.log(passwordLength);
    console.log(maybeCharacters);
    console.log(mustHaveCharacters);
  };

  for(var i = 0; i < mustHaveCharacters.length; i++) {
    finalPassword[i] = mustHaveCharacters[i];
  };
  console.log(passwordLength);
  console.log(maybeCharacters);
  console.log(mustHaveCharacters);
  let answer = finalPassword.join('');
  return answer;
};


//WORK ON THIS RANDOM FUNCTION TO 
function getRandom(requirements) {
  const value = Math.floor(Math.random() * requirements.length);
  return requirements[value];
};
    //   var randomChar = possible_characters[math.floor(Math.random() * possible_characters.passwordLength + 1)];
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
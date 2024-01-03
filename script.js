// Assignment Code
const generateBtn = document.querySelector("#generate");

function generatePassword(){
// prompt to display a message to indicate the length of the key
let length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

// indicates the lenght of the password  not less than 8 and not more than 128
// inside of the loop we send a message to the client that needs a valid number inside of our range followed by the initial message
while (isNaN(length) || length < 8 || length > 128) {
alert("Please enter a valid number between 8 and 128.");
length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
}


// wich character the client prefer ?
let includeLowercase = confirm("Include lowercase characters?");
let includeUppercase = confirm("Include uppercase characters?");
let includeNumeric = confirm("Include numeric characters?");
let includeSpecial = confirm("Include special characters?");


// we allow the website show a message if any of our options has been selected
while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
  alert("Please select at least one character type.");
  includeLowercase = confirm("Include lowercase characters?");
  includeUppercase = confirm("Include uppercase characters?");
  includeNumeric = confirm("Include numeric characters?");
  includeSpecial = confirm("Include special characters?");
}
// Character sets based on user choices
let charset = "";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

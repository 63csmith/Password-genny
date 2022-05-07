// Assignment Code
var generateBtn = document.querySelector("#generate");

//Possible Characters 
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];
let allCharacters = [upperCase, lowerCase, numbers, special];
const confirmNumbers = document.querySelector("#number");
const confirmUpper = document.querySelector("#uppercase");
const confirmLower = document.querySelector("#lowercase");
const confirmSpecial = document.querySelector("#special");
const passwordLength = document.querySelector("#length").value;

// Write password to the #password input
function writePassword() {
  var password = generateRandomArray();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}


function generatePassword() {
  let selections = [] 
  if(confirmUpper.checked){
    selections.push(0)
    
  }
  if(confirmLower.checked){
    selections.push(1)
  }  if(confirmNumbers.checked){
    selections.push(2)
  }  if(confirmSpecial.checked){
    selections.push(3)
  }
  return selections
}
  function generateRandomArray(){
  let choiceArray = generatePassword()
  let randomArray = []
  for(let i=0;i<choiceArray.length; i++) {
    randomArray.push(generateRandom(allCharacters[choiceArray[i]]))
  } console.log (randomArray)
}
  

function generateRandom(arr) {
  const random = Math.floor(Math.random() * arr.length);
console.log(random, arr[random]);
return arr[random]
}






generateBtn.addEventListener("click", writePassword);




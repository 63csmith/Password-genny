//Possible Characters 
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

const confirmNumbers = document.getElementById("numbers");
const confirmUpper = document.getElementById("uppercase");
const confirmSpecial = document.getElementById("special");
const confirmLength = document.getElementById("length");
const passwordText = document.getElementById("password");
const generateBtn = document.getElementById('generate');


function writePassword(){
  const totalLength = confirmLength.value;
  const includeUppercase = confirmUpper.checked;
  const includeNumbers = confirmNumbers.checked;
  const includeSymbols = confirmSpecial.checked;
  const password = generatePassword(
    totalLength,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  
}

let generatePassword = (
  totalLength,
  includeUppercase,
  includeNumbers,
  includeSymbols
) => {
  var selectedOptionArray = [];
  let lcd = lowerCase;
  selectedOptionArray.push(lowerCase);
  console.log(lcd);
  if (includeUppercase){
    lcd = lcd.concat(upperCase);
    selectedOptionArray.push(upperCase);
  }  
  if (includeNumbers){
    lcd = lcd.concat(numbers);
    selectedOptionArray.push(numbers);
  } 
  if (includeSymbols){
    lcd = lcd.concat(special);
    selectedOptionArray.push(special);
  } 
  console.log(selectedOptionArray)
  const passwordCharacters = [];
  generateRandom(selectedOptionArray,lcd,totalLength);
  console.log(lcd)

};
function generateRandom(arr,lcd,totalLength){
  let genArr = [];
  for(let i =0; i < arr.length; i++){
    genArr.push(arr[i][Math.floor(Math.random() * arr[i].length)])
    
  }
    for (let i =0; i < totalLength - arr.length; i++){
    genArr.push(lcd[Math.floor(Math.random() * lcd.length)])
  }

 
  passwordText.innerText = genArr.join('');
}



generateBtn.addEventListener("click", writePassword);
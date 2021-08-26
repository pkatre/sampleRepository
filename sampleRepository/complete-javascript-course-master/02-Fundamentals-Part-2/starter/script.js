'use strict'; //it tells us what is exactly wrong in ouir code
/*let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true; // we mistaken s here so strict mode tells us that this variable is not defined
if(hasDriversLicense) console.log('I can drive');

const interface = 'audio'; //error reserverd verd not used
const private = 23;//error
const if= 34; //error we cant used reserverd words*/

//Fuctions

/*function logger(){
    console.log('My name is payal');
}
//calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleJuice=fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

//function declarations
function calAge1(birthyear){
  const age = 2037-birthyear;
  return age;
}
const age1=calAge1(1993); //functions calling
console.log(age1);

 //functions expressions
const calAge2 = function(birthyear){
    return 2037-birthyear;
}
const age2 = calAge2(1993); //functions calling
 console.log(age1,age2);*/

//Arrow functions
/*const calAge3 = birthyear => 2037-birthyear;
const age3 = calAge3(1990);
console.log(age3);

const yearsUntilretirement = (birthyear, name) =>{
    const age = 2037-birthyear;
    const retirement = 65-age;
    return `${name} retires in ${retirement} years`;
}
console.log (yearsUntilretirement(1990, 'payal'));

//function calling function

 const cutPieces = function(fruit){
     return fruit*4;
 }
const frutProcessor = function (apples,oranges){
    const applePieces = cutPieces(apples); //calling cutpieces function inside fruitprocessor
    const orangePieces = cutPieces(oranges);//calling cutpieces function inside fruitprocessor
    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} 
     pieces of orange.`;
     return juice;
}
console.log(frutProcessor(2,3));*/

const calAge=function(birthyear){
     return 2037-birthyear;
}
const yearsUntilRetirement=function(birthyear,name){
    const age = calAge(birthyear);
    const retirement = 65-age;
   // return retirement;
   return `${name} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1990,'payal'));

//coding challenge 1










let js='amazing';
console.log(40+23);
console.log('payal');
console.log(23);
//let firstName = "payal";
//console.log(firstName);
true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun); //to find the type of datatype
//console.log(typeof true);// to find the datatype
//console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'jonas');
javascriptIsFun = 'yes!';
console.log(typeof javascriptIsFun);
let year;   //undefined
console.log(year);
console.log(typeof year);
year = 1919;
console.log(typeof year);
console.log(typeof null);

lastName = 'katre'; //we can define variable without declaring it but its not a good practice
console.log(lastName);
//mathematics operator
const now=2037;
const agejonas= now-1993;
const agePayal = now-1990;
console.log(agejonas, agePayal);

console.log(agejonas*2, agejonas/10,2**3);
//2**3 means 3 IS the power of 2 that is 2*2*2

// + operator
const Name = 'jonas';
const surName = 'schemadman';
console.log(Name +' '+ surName); // to concatninate two strings
 
//assignment operator
let x = 10 + 5;
x += 10; //x= x+10 that is 25;
x *=4;   //result 100
x++;
x--;
console.log(x);

//comparision operator
console.log(agejonas > agePayal);
console.log(agePayal >= 30);
console.log(now - 1991 > now - 2018);


let z,y;
z=y= 25-10-5;  //z=y=10;
console.log(z,y);

const averageAge = (agejonas+agePayal)/2;
console.log(averageAge);

//String literals

//const firstName ='payal';
//const job = 'student';
//const birthYear = 1993;
//const yearMain = 2037;

//const payal = "I am" +" "  +firstName +', a' +" "+(yearMain -birthYear) + "years old" +" " +job +'!';
//console.log(payal);
//String template


//const payalNew = ` am ${firstName}, a ${yearMain-birthYear}, years old ${job}`;
//console.log(payalNew);
//console.log(`This is regular string`);
//console.log('String with\n\
//new line\n\
//character');
/*console.log(`String
 with
 new line`);*/

 //control statement

 /*const age = 15;
 
 if(15>=18){
    console.log ('payal can start driving');
 }
 else{
     const yearsLeft= 18-age;
     console.log('years left for driving'+" "+yearsLeft);
 }

 const birthYear = 1998;
 let century;
 if(birthYear<=2000){
     century = 20;
 }
 else{
     century = 21;
 }
 console.log(century);*/

 //calculate BMI
 /*const massMark = 95;
 const heightMark = 1.80;
 const massJohn = 98;
 const heightJohn = 1.70;

 const BMIMark = massMark/heightMark **2;
 const BMIJohn = massJohn/(heightJohn*heightJohn);
 if(BMIMark>BMIJohn){
     console.log("Mark's BMI is heigher than John");
 }
 else{
     console.log("John's BMI is heigher than Mark")
 }

 //type conversion

 const inputYear = '1991';
 console.log(Number(inputYear) +18); //convert string type into number
 console.log(Number('jonas'));//not a number
 console.log(typeof NaN);
 console.log(String(23), 23);

 //type coersion
 console.log('I am '+23 +' years old');//js automatically converts string into number
 console.log('23'-'10'+3);//js automatically converts string into number
 console.log('23'+'23');  //result will be 2323
 console.log('23'/'10'); //result will be 2.3
 console.log('23'>'18');//output will be true
 console.log('1'+1)//output will be 11
 let n='1'+1;
 n=n-1;
 console.log(n);//output will be 10 becz except + operator all operator convert a string into a number


 // 5 falsy value: 0,'',undefined,null,NaN
 
 console.log(Boolean(0));
 console.log(Boolean(undefined));
 console.log(Boolean('jonas'));
 console.log(Boolean({}));
 console.log(Boolean(''));
 const money = 0;
 if(money>0){
     console.log('Dont send it all');
 }
 else{
     console.log('Yopu should get a job');
 }
 let height=20;
 if(height){
     console.log('YAY! Height is defined');
 }
 else{
     console.log('Height is undefined');
 }*/

 //Equality operator

 /*const age = 18;
 if(age===18){  //strictly equal
     console.log('You just became an adult:D(strict)');
 }
 if(age==18) console.log('You just became an adult :D(loose)');//loosely equal
 
 const favourite=Number(prompt("What is your favourite number?"));//getting the value from webpage
 console.log(favourite);
 console.log(typeof favourite);

 if(favourite==23){  //when we do type conversion then it will give number value otherwise string value
     console.log('Cool! 23 is an amazing number!');
 }
 else if(favourite===7){
    console.log("Cool! 7 is also a cool number");
 }
 else if(favourite===9){
    console.log("Cool! 9 is also a cool number");
 }
 else{
     console.log("number is not 23 or 7 or 9");
 }

 if(favourite!==23){
     console.log('why not 23?');
 }*/

 //boolean logic
/* const hasDriverLicense = true;
 const hasGoodVision = false;
 console.log(hasDriverLicense && hasGoodVision);
 console.log(hasDriverLicense || hasGoodVision );
 if(hasDriverLicense && hasGoodVision){
     console.log("payal can drive!");
 }else{
     console.log("someone else should drive!");
 }
 const isTired = true;
 console.log(hasGoodVision&& hasDriverLicense && isTired);*/

 //coding challenge 3

 /*const scoreDolphines = (96+108+89)/3;
 const scoreKolas = (88+91+110)/3;
 console.log(scoreDolphines,scoreKolas);

 if(scoreKolas>scoreDolphines){
     console.log("scoreKolas get trophy");
}else if(scoreDolphines>scoreKolas){
    console.log("scoreDolphines win the trophy");
}else if(scoreKolas===scoreDolphines){
    console.log("Both win the trophy");
}*/

//Bonas 1
const scoreDolphines = (97+112+101)/3;
const scoreKolas = (109+95+123)/3;
console.log(scoreDolphines,scoreKolas);
if(scoreKolas>scoreDolphines&&scoreKolas>=100){
  console.log("scoreKolas win the trophy");
}else if(scoreDolphines>scoreKolas&& scoreDolphines>=100){
    console.log("scoreDolphine win the trophy");
}
//switch statement
const day = 'monday';
switch(day){  //day ===monday
    case 'monday':
     console.log("plan course structure");
     console.log('Go to coding meetup');
    break;
    case 'tuesday':
     console.log('prepare theory videos');
    break;
    case 'wednesday':
    case 'thursday':
        console.log('write code example');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
        case 'sun':
            console.log("Enjoy weekends");
           break;
    default:
        console.log('Not a valid day');
}

//conditional operator

const age = 23;
age>=18 ? console.log('I like to drink wine'):
console.log('I like to drink water');

const drink = age>=18 ? 'wine': 'water';
console.log(drink);

let drink2;
if(age>=18){
    drink2 = 'wine';
}else{
    drink2 = 'water';
}
console.log(drink2);
//Using template literal
console.log(`I like to drink ${age>=18 ?'wine':'water'}`);

//coding challenge4

const bill = 275;
const tip = bill>=50 && bill<=300 ? bill*0.15:
bill*0.20;
console.log(`The bill was ${bill},the tip is ${tip},and total value ${bill+tip}`);








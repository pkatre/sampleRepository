"use strict"; //it tells us what is exactly wrong in our code
/*let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true; // we mistaken s here so strict mode tells us that this variable is not defined
if(hasDriversLicense) console.log('I can drive');

const interface = 'audio'; //error reserverd word not used
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

/*const calAge=function(birthyear){
     return 2037-birthyear;
}
const yearsUntilRetirement=function(birthyear,name){
    const age = calAge(birthyear);
    const retirement = 65-age;
   // return retirement;
   return `${name} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1990,'payal'));*/

//coding challenge 1

/*const calAvg = (a, b, c) => (a + b +c)/3;
//test1
 const scoreDolphines = calAvg(44, 23, 71);
console.log(scoreDolphines);
const scoreKolas =calAvg(500 , 1000 ,91);
console.log(scoreKolas);
checkWinner(scoreKolas,scoreDolphines);
checkWinner(576,200);

 function checkWinner(val1, val2){
    console.log(val1);
    console.log(val2);
    if(val1 >= 2 * val2){
        console.log(`kolas win (${val1} vs.${val2})`);
    }else if(val2>= 2*val1){
        console.log(`Dolphine wins (${val2} vs.${val1})`);
    }
    else{
        console.log('No team wins');
    }
}*/

//Arrays
/*const friend1 = 'Michel';
const friend2 = 'steven';
const friend3 = 'Peter';

const friends = ['Michel', 'steven', 'Peter'];
console.log(friends);
console.log(friends.length-1);
friends[2] = 'jay';
console.log(friends[2]);

const years = new Array(1991, 1984, 2020, 2000);
console.log(years[0]);
console.log(years.length);
for(let i=0;i<years.length;i++){
    console.log(years[i]);
}

const payal = ['payal', 'katre', 2037-1993,friends];
console.log(payal);

//Exercise
const calAge = function(birthyear){
    return 2037-birthyear;
}
const years1 = [1990, 1967, 2082, 2010, 2020];
console.log( calAge(years1));// we cannot do this becz in calAge function we cant provide a  array value
const age1 = calAge(years1[0]);
console.log(age1);*/

/*const friends = ['payal', 'kajal','komal'];
friends.push('jay'); //this function put element into end of the array
console.log(friends);
console.log(friends.length);

friends.unshift('john');//this method shift element in starting of an array.
console.log(friends);

//remove element

friends.pop();//last
friends.pop(); //remove second last
friends.shift();//remove first element from the array


console.log(friends);
console.log(friends.indexOf('kajal'));//this function returns the index vale of element

friends.push(23);// this is number
console.log(friends.includes('payal'));// this method shows if element is present in an array or not
console.log(friends.includes('nisha'));
console.log(friends.includes('23')); //it does not do type coersion cant convert num to string

if(friends.includes('payal')){
    console.log("you have a friend payal");
}*/

//Coding challenge calculate bill+tip

/*const calTip= function(bill){
 return bill>= 50 && bill<= 300? bill*0.15 :
 bill * 0.2;
}

const bills = [125, 555, 44];
const tips =[calTip(bills[0]), calTip(bills[1]), calTip(bills[1])];
console.log(bills, tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);*/

//Objects

const payalArray = [
  "payal",
  "katre",
  2037 - 1990,
  "student",
  ["nisha", "bhawna"],
];
// console.log(payalArray); //we cant't give a name for perticular element we can
//referance them by using order number by which they can appear.

//To solve above problem

/*const payal = {
    firstName: 'payal',
    lastName: 'katre',
    age: 2037-1991,
    job:'teacher',
    friends: ['nisha', 'bhawna']
};
console.log(payal);
console.log(payal.firstName);
console.log(payal['friends']);//use dot or bracket

const nameKey = 'Name';
console.log(payal['first'+ nameKey]);
console.log(payal['last' + nameKey]);

const interstedIn = prompt('what do you want to know about payal? choose between firstname, lastname,age,job,friends');*/
/*console.log(payal.interstedIn);//this is undefined becz interstedIn is not defined in payal
 */
/*console.log(payal[interstedIn]);//use bracket notation for exact result*/

/*if(payal[interstedIn]){
    console.log(payal[interstedIn])
}else{
    console.log("wrong request!");
}

payal.location = 'Pune'; //you can add element inside array
console.log(payal);

//challenge
//payal has 2 friends but her bestfriend is nisha

console.log(`${payal.firstName} has ${payal.friends.length} friends but her best friend is 
${payal.friends[0]}`);*/

//Object method

/*const payal = {
    firstName:'payal',
    lastName:'katre',
    birthYear:1990,
    job: 'student',
    friends:['nisha','priya'],
    hasDriverLicense :true,

    calAge: function(birthyear){
        return 2037-birthyear
    },

    calAge: function(){
        console.log(this);
        return 2037-this.birthYear;
    },

    calAge:function(){
        this.age = 2037-this.birthYear;
        return this.age;
    },
    getSummary: function(){
     return `${this.firstName} is a ${this.calAge()} year old ${payal.job},
     and she has ${this.hasDriverLicense ? 'a' : 'no'} driver license.`
    }
};

console.log(payal.calAge(1990));
console.log(payal['calAge'](1990));

console.log(payal.calAge());
console.log(payal.age);

//challenge
//payal is a 46 year old student and she has a/no driver license

console.log(payal.getSummary());*/

//challenge
//calculate BMI of mark and john

const mark = {
  //object
  fullName: "mark miller",
  mass: 78,
  height: 1.69,
  calBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  //object
  fullName: "John smith",
  mass: 92,
  height: 1.95,
  calBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
//we cant call calAge function directly we should calculate it explicitly
/*console.log(mark.calBMI());
console.log(john.calBMI());

if(mark.bmi>john.bmi){
    console.log(`${mark.fullName} BMI ${mark.bmi} is higher than ${john.fullName}
     BMI ${john.bmi} `);
}
else if(john.bmi>mark.bmi){
    console.log(`${john.fullName} BMI ${john.bmi} is higher than ${mark.fullName}
    BMI ${mark.bmi}`);

}*/

// For Loop

/*for(let i=0;i<10;i++){
    console.log("Lifting weight repeation "+i);
}

const payal = [
    'payal',
    'katre',
    2037-1990,
    'student',
    ['kajal','nit','git']
];
const types = [];

for(let i=0;i<payal.length;i++){
    //reading from payal array
    console.log(payal[i], typeof payal[i]);
    //filling typeof into an array
    types[i] = typeof payal[i];
}
console.log(types);
const years =[1991, 1990, 2020, 2030];
const ages =[];

for(let i=0;i<years.length;i++){
   ages.push (2037-years[i]);
}
console.log(ages);*/

//continue and break
//CONTINUE
/*const payal = [
    'payal',
    'katre',
    2037-1990,
    'student',
    ['kajal','nit','git']
];

for(let i=0;i<payalArray.length;i++){
    if(typeof payal[i]!=='string')continue;
    console.log(payal[i],typeof payal[i]);
}

//BREAK
for(let i=0;i<payal.length;i++){
    if(typeof payal[i]=='number')break;
    console.log(payal[i],typeof payal[i]);
}*/

//while loop

/*for(let i=0;i<=10;i++){
    console.log("lifting weight repetation"+i);
}

let i=1;
while(i<=10){
   console.log("lifting wight repetation"+i);
   i++;
}

let dice= Math.trunc(Math.random()*6);
console.log(dice);

while(dice!==6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(math.random)
}*/

//challenge

/*const calTip = function(bill){
    return bill>=50&&bill<=300 ? bill*0.15:bill*0.20;

}
const bills =[22, 295, 56, 890, 450, 345];
const tips=[];
const totals =[];

for(let i=0;i<bills.length;i++){
  const tip = calTip(bills[i]);
  tips.push(tip);
  totals.push(tip +bills[i]);
}
console.log(bills,tips,totals);

 const calAvrage = function(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
  sum =sum+arr[i];
  }
  
  return sum/arr.length;
 }
console.log (calAvrage([2, 4, 6]));
console.log(calAvrage(totals));
console.log(calAvrage(tips));*/

//create addition function

function addition(a, b) {
  return a + b;
}
const add = addition(10, 20);
// console.log(add);

//reverse the number
let num = 1234;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + parseInt(num % 10);
  num = parseInt(num / 10);
}
// console.log(rev);

//find number of mathstick

function matchHouses(steps) {
  let matchstick = steps * 6 - (steps - 1);

  return matchstick;
}
console.log("Number of matchSticks required: " + matchHouses(1));
console.log("Number of matchSticks required: " + matchHouses(4));
console.log("Number of matchSticks required: " + matchHouses(26));
console.log("Number of matchSticks required: " + matchHouses(87));

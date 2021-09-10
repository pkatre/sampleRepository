'use strict';

/*function calAge(birthyear) {
  const age = 2037 - birthyear;
  console.log(firstName); //parent of function scope is global scope so calAge function access the global variable

  function printAge() {
    let output = `${firstName} you are ${age} born in ${birthyear}`;
    console.log(output);
    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      const firstName = 'steven';
      const str = `Oh, you are a millenial ${firstName}`; //it will try to search variable in current scope if it dont get try finding into global scope
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      const output = 'New output';
      //console.log(output);  //result new output
    }
    //console.log(str);
    console.log(millenial);
    // add(2, 3); //in strict mode we cant access this function here.without strict mode we can access
    //console.log(output);//result you are 46 born in 1991
  }
  printAge();
  return age;
}

const firstName = 'payal';
calAge(1991);
//console.log(age); //we cant access age variable here bcz the scope of age variable is inside function
//console.log(printAge()); //we cant access printage function here*/

//HOISTING WITH VARIABLE
/*console.log(me); //hoisted because it is var variable so value of this variable is undefined
console.log(job); //not hoisted because let and const cannot accessed before declaring it
console.log(year); //--------------------//-------------------------------------

var me = 'payal';
let job = 'student';
const year = 1991; */

//HOISTING WITH FUNCTION

/*console.log(addDecl(2, 3)); // we can access it because of hoisting output is 5
//console.log(addExpr(2, 3)); //we cant access it because it is declared it at const
console.log(addArrow); // output is undefined

// we cant access it bacause it is declared it at const
console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;*/

//EXAMPLE
console.log(undefined);
if (!numProduct) deleteShoppingCart();
var numProduct = 10;

function deleteShoppingCart() {
  console.log('All product deleted');
}

var x = 1;
let y = 2;
const z = 3; // variable declaired with let and const cannot create properties in window
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthyear => 2037 - birthyear;
console.log(x);

//Challenge
//calculate temperature amplitude
// ans:diff between highest and lowest temp
//how to compute the max and min temp?
// whats a sensor error?

//2) breaking up into sub problems
// how to ignore error?
// Find max value in temp array
//find min value in temp array
//subtract min from max(amplitude) and return it

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calTempAmplitude = function (temperature) {
  let max = temperatures[0];
  let min = temperatures[0];

  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];
    if (temperatures[i] > max) max = currentTemp;
    if (temperatures[i] < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calTempAmplitude(temperatures);
console.log(amplitude);

//const mergeArray

const mergeArray = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);
};
mergeArray([1, 2, 3], [4, 5, 6]);
//challenge
//1)understand the problem
// Array transformed to string,sepearted by...
// what is x days? answer:index+1

//2)breaking up into sub-problems
// transform array into string
//transform each element into string with c
//string needs to contain day(index+1)
//Add...between element and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}c...${data1[1]}c...${data1[2]}c...`);
const printForcast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}c`;
  }
  console.log(str);
};
printForcast(data1);

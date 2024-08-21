/*
Write a function `reverseString(str)` that takes in a string. The function
should return a new string where the order of the characters is reversed.
*/

function reverseString(str) {
  let string = '' ;
  
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
} 

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = reverseString;
} catch (e) {
  module.exports = null;
}
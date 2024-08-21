/*
Write a function `twoDimensionalSum(arr)` that takes in a 2D array of numbers
and returns the total sum of all numbers.
*/

//Step #1: Declare the function
function twoDimensionalSum(arr) { 
//Step #2: Initialize total and set value to 0; what will be storing the sum
  let total = 0;
//Step #3: Create a nested for loop to go over the inner arrays
  for (let i = 0; i < arr.length; i++) {
//Step #4: Create a nested for loop to go over the inner arrays
    for (let j = 0; j < arr[i].length; j++){
//Step #5: Adds the current element to "total", initialized in Step #2
      total += arr[i][j];
    }
  }
//Step #6: Returns the new "total" value after the 2D array is ran through  
  return total;
}



let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = twoDimensionalSum;
  } catch (e) {
    module.exports = null;
  }
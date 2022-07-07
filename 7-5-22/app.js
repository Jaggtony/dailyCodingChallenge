/*Write a function that returns both the minimum and maximum number of the given list/array.

prep
p:given an array of numbers
r:return the highest and lowest numbers in the array in a new array
e:
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
*/
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)]  //using the math function and the num max methods set them in an array and return it
  }
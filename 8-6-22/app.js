/*Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

prep
p:given an array and weather to return the index or the number of the smallest number in the array
r:return the smallest number or the smallest number index depending on whats provided
e:
min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/

function min(arr, toReturn) {
    if (toReturn == 'value'){  //set up perameters for value or index
      return Math.min(...arr) //for value return the min of the array with math.min
    }else {return arr.indexOf(Math.min(...arr))} //for all other cases return the index of the min with indexOf method
  }
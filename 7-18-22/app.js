/*Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

prep
p: given an array of numbers
r: return weather the array is ascending or descending 
e:([1, 2]), 'yes, ascending')
*/

function isSortedAndHow(arr) {
    return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1]) //use every to check that every element passes the ascending test
      ? "yes, ascending"
      : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1]) //use every to check that every element passes the descending test
      ? "yes, descending"
      : "no"; //set no for everything else
  }
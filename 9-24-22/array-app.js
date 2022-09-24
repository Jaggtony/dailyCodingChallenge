/*Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
prep
p:given an array of numbers
r:add all the numbers and divide by the total numer of elements in the array and return it
e:1+3+5+7 = 16 => 16/4 = 4
*/
var findAverage = function (nums) {
    let total = nums.reduce((a, b)=> a+b, 0)
    return total/nums.length
  } // set a variable equal to all the items added together using reduce
    //return that number divided by the length of the origional array 
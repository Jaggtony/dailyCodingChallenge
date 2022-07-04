/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.

prep
p:given an array of ones and zeroes     
r:return the numbers binary number
e:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

*/
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2); //join the array to a string to parse to return the binary
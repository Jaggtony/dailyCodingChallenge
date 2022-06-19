/*Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, 
your task is to find the sum of the minimum values in each row.

prep
p: given arrays of numbers
r:return the lowest number in each array and add
e: [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]  26
*/

function sumOfMinimums(arr) {
    return arr.reduce((a, b)=>a+Math.min(...b),0)
  }  //use reduce method to add the minimum number in the arrays together
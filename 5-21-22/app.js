/*Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

[2, 1, 10]  ->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 ( Nothing in Haskell ).*/
//prep
//p:always a number, can be 0
//r:implicit arrow return
//e:[-3, -2, -1], 2
const sumOfDifferences=(arr) =>arr
  .sort((a, b) => b - a)  //sort in descending order
  .map((a, i) => a - arr[i + 1] || 0)//return a new array with map, bustracting each number in th array 
  .reduce((a, b) => a + b, 0); //add it all together with reduce


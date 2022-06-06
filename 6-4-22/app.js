/*Create a function that returns the sum of the two lowest positive numbers 
given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

prep
p positive array of at least 4 numbers
r return statement 
e [10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
function sumTwoSmallestNumbers(numbers) {  
  let numbs = numbers.sort((a, b)=> a-b).slice(0,2)
  return numbs.reduce((a, b)=>a+b, 0)
}
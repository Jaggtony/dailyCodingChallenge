/*Complete the function which takes two arguments and returns all numbers
which are divisible by the given divisor.
First argument is an array of numbers and the second is the divisor.*/
//prep
//P:always numbers
//r:return statement
//e: divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
//
function divisibleBy(numbers, divisor){
    return numbers.filter(e => e%divisor ===0)
  }  //return the array, numbers, after filtering through and pulling each item with a modulus 0 with the divisor
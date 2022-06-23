/*Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. 
First argument is an array of numbers and the second is the divisor.

prep
p: given an array of numbers and a single number to divide by
r: return the numbers divisible by the second number
e:[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/

function divisibleBy(numbers, divisor){
    return numbers.filter(x=>x%divisor===0)
}   //use filter to grab all the numbers your can evenly didvde by the divisor
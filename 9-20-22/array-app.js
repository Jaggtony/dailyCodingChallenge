/*Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.
prep
p:given a number. will never be less than 1
r:given number in an array up to that number. with the numbers modulus 3 = Fizz, numbers modulus 5 = Buzz , and numbers modulus both = FizzBuzz
e:fizzbuzz(3) -->  [1, 2, "Fizz"]
*/
function fizzbuzz(n)
{
  let arr = [] //create array to add to 
  for (let i = 1 ; i<n+1; i++){ // make loop that ends with the given number
    if (i % 3 ==0 && i % 5 ==0){ //condition for "FizzBuzz"
      arr.push('FizzBuzz')
    }else if (i % 3 ==0){ //condition for 'Fizz'
      arr.push('Fizz')
    }else if (i % 5==0){  //condition for 'Buzz'
      arr.push('Buzz')
      }else{arr.push(i)} //everything else
    }return arr //final return 
}

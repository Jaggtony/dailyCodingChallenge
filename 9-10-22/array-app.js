/*Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).
prep
p:given 2 elements. a spot to start/number to count by and a number to show how long 
r:return an array that starts at the first variable and counts up byt that variable all the way to the other variable number of elements
e:countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/
function countBy(x, n) {
    let z = []; //set ana rray to add to
  for(let i =1 ; i< n+1 ; i++){ //make loop starting at 1 and ending at the n variable
    z.push(x*i) //each element of 1 push to the z array after multiplying it by n
  }
    return z;
  }
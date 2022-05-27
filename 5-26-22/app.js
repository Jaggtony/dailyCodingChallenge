/*Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]*/

//prep
//p:always a number above 0
//r:return statement
//e:example above
function countBy(x, n) {   //make function with perameters x and n
    let z = [];  //make an array name z
    for (let i =1 ; i<n+1;i++){ //for loop staring at 1 going through the argument n and increasing by 1
      z.push(x*i) //add these numbers to the array z with the push method
    }               //inside push method make the multiple of x with the index number
    return z; //return
  }
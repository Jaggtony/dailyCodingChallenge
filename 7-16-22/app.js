/*Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
prep
p:given a variable to count to and itll never be less than 1
r:return an array based on the perameters given. 
e:fizzbuzz(3) -->  [1, 2, "Fizz"]
*/
function fizzbuzz(n){
  let arr=[] //set up arraqy to return
  for (let i=1; i<n+1;i++){ //simple for loop
    if (i % 3 ==0 && i % 5 == 0){ //set conditions for the words to be pushed
      arr.push("FizzBuzz")
    }else if(i % 3 ==0){
      arr.push("Fizz")
    }else if(i % 5 == 0){
      arr.push("Buzz")
    }else{arr.push(i)} //set conditions for everything that isnt returning words to the array
  }return arr //retur final array
}

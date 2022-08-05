/*We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

prep
p:given a number
r:return an array from 0 to the number given
e:arr(5) // => [0,1,2,3,4]
*/
const arr = N => {
    let tot= []  //set up array to push to
    for (let i = 0 ; i<N;i++){ //loop to go until N
      tot.push(i) //push the array index number to the final array
    }return tot //return final
  }
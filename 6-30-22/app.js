/*Arrange them in a way similar to the to-and-fro movement of a Pendulum

The Smallest element of the list of integers , must come in center position of array/list.

The Higher than smallest , goes to the right .
The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.

prep
p:Given an array/list [] of n integers,Array/list size is at least 3 ,In Even array size , The minimum element should be moved to (n-1)/2 index (considering that indexes start from 0)
,Repetition of numbers in the array/list could occur , So (duplications are included when Arranging).
r:return the numbers pendulumed in an array
e:pendulum ([6, 6, 8 ,5 ,10]) ==> [10, 6, 5, 6, 8]
*/

function pendulum(values) {
    values.sort((a, b)=>a-b)  //organize the array least to biggest
    let arr =[] //make new array to dump the final into
      for ( let i = 0; i<values.length;i++){ //loop through everything
        if (i % 2 ==0 || i ==0){  //conditional for adding to front of an array
          arr.unshift(values[i])
        }else{arr.push(values[i])} //conditional for adding to back of array
      }return arr //return final array
  }
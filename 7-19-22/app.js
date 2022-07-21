/*Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
prep
p:given an array of arrays containing numbers, can be empty arrays. possible negatives. 
r:return the numbers in 1 array in ascending order. 
e:Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

function flattenAndSort(array) {
    let final =[] //set up array to send info to
    for (let i =0;i<array.length;i++){  //loop for main variable array
      for(let j =0 ; j<array[i].length;j++){ //loop into the numbers in the inner arrays
      final.push(array[i][j]) //push those numbers to a new array to be one array
        }
    }
    return final.sort((a, b)=>a-b)  //return the new array sorted
    
  }
 //another method
  function flattenAndSort(array) {
    return array.reduce((a, b)=>[...a, ...b],[]).sort((x, y)=>x-y);
  }   // combine it all with a reduce then sort
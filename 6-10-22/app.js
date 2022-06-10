/*You are given array of integers, your task will be to count all pairs in that array and return their count.

prep
p:can be empty array, always numbers
r:retun number of unique pairs
e:[1, 2, 5, 6, 5, 2]  -->  2   /  [1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
*/

function duplicates(array){
    array = array.sort((a, b)=>a-b)  //sort array from least to greatest
    let total = 0 //variable for total amount of pairs
    for (let i = 0 ; i<array.length;i++){ //basic for loop
      if (array[i]===array[i+1]){  //conditional to see if current element is equal to the next
        total ++ //if theyre equal add 1 to the total
        array.shift() //if equal shift them off the array to not be counted again
        
      }
    }
    return total  //return it
  }
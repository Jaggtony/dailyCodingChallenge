/*You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.*/

//prep
//p:string of letters and array of 2 numbers
//r:return the only letter left
//e:let str = "zbk", arr = [0, 1]
//      str = "bk", arr = [1]
//      str = "b", arr = []
//  return 'b'

function lastSurvivor(letters, coords) {
    letters = letters.split('')  //split given string to an array
    for (let i =0;i<coords.length;i++){  //for loop to go through array by given coords array
      letters.splice(coords[i], 1)  //cut the letters using the given array as index
    }
    
    return letters.join('') //make letters a string again
  }
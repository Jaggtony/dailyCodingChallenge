/*Implement a function which finds the numbers less than 2, and the indices of numbers 
greater than 1 in the given sequence, and returns them as a pair of sequences.

Return a nested array or a tuple depending on the language:

The first sequence being only the 1s and 0s from the original sequence.
The second sequence being the indexes of the elements greater than 1 in the original sequence.

prep
p:array of numbers given
r:return in 2 seperate arrays
e:[ 0, 1, 2, 1, 5, 6, 2, 1, 1, 0 ] => [ [ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ] 
*/

function binaryCleaner(arr) {
    let arr2= [[],[]] //make new array of arrays
    arr.map((x, i)=> x<2 ? arr2[0].push(x) : arr2[1].push(i))
    //map through origional array checking if element is less than 2
    return arr2
  }
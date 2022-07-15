/*As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).
prep
p:given an array of 3 numbers
r:return the array of the number for the middle
e:gimme([2, 3, 1]) => 0
*/
function gimme (triplet) {
   return [...triplet].indexOf(triplet.sort((a,b)=>a-b)[1])
}   //return the index of the origional array based on the middle number of the sorted array 
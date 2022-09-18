/*As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).
prep
p:given an array of 3 numbers
r:return the index of the number that would be in the middle numerically
e:gimme([2, 3, 1]) => 0
*/
const gimme =(triplet)=> [...triplet].indexOf(triplet.sort((a, b)=>a-b )[1])
  //use indexOf method to find an index number.  inside the method set up a sort of the triplet argument and take the middle element of that to find the index in the origional number
/*Write a function that flattens an Array of Array objects into a flat Array. 
Your function must only do one level of flattening.

prep
p:arrays or arrays
r:return all the arrays as 1 array
e:
flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]

*/

function flatten(l){
    return [].concat(...l)
  }//return the array concatinated with the next item
//Write a function to get the first elements of asequence. 
//Passing a parameter n (default=1) will return the first n 
//elements of the sequence.
//
//If n == 0 return an empty sequence []
//
//Examples
//var arr = ['a', 'b', 'c', 'd', 'e'];
//first(arr) //=> ['a'];
//first(arr, 2) //=> ['a', 'b']
//first(arr, 3) //=> ['a', 'b', 'c'];
//first(arr, 0) //=> [];

//prep
//p:will always be string in an array
//r: return statement
//e:above
function first(arr, n=1) {  //create function with an array and perameter to stop at 
    return arr.slice(0, n) //return the array with the slice method stsrting st index 0 and ending at the stop point with x
  }


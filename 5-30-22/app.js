/*Task
Given an array/list [] of integers , Find the Nth smallest element in this array of integers
Notes
Array/list size is at least 3 .
Array/list's numbers could be a mixture of positives , negatives and zeros .
Repetition in array/list's numbers could occur , so don't Remove Duplications */
//prep
//p:an array of numbers and a number for compare, can be negative, can not be letters 
//r:return statement
//e:nthSmallest({15,20,7,10,4,3} ,3) ==> return (7), nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2)
function nthSmallest(arr, pos){
    return arr.sort((a, b)=>a-b)[pos-1]
  }  //use sort method to organize least to greatest and take the position argument as the index minus 1 
     
     
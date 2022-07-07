/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

prep
p:given an array thats empty or has numbers
r:return weather the product of the array is odd or even
e:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/
function oddOrEven(array) {
    array = array.reduce((a, b)=> a+b,0)  //set array to equal its self added up
   if (array % 2 !==0){ //start conditional, this if its not even
     return 'odd'
   }else{ return 'even'}  //this conditional for everything else
 }
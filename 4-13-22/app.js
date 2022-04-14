//Write a method, that will get an integer array as parameter and will process every number from this array.
//
//Return a new array with processing every number of the input-array like this:
//
//If the number has an integer square root, take this, otherwise square the number.
//
//Example
//[4,3,9,7,2,1] -> [2,9,3,49,4,1]
//Notes
//The input array will always contain only positive numbers, and will never be empty or null.


//take the number. square it and use modulus 1 to see if it returns 0. if it does square root it, if it doesnt square it
const squareOrSquareRoot=(array)=>array.map(a=>Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a*a))
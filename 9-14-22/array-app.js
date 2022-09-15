/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
prep
p:given an array of numbers, negative positive and 0
r: return a tally of how many even numbers there are and an added count of the negative numbers, in an array together
e:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
function countPositivesSumNegatives(input) {
    let neg = 0
    let pos = 0 //set up variables to ad to 
      input.forEach((x)=> { //for each loop to loop through all the array elements
        if (x>0){ //condition for the positives
          pos ++
        }else{neg = neg + x} //condition for the negatives
        
      });
    return [pos, neg] //return the totals in an array together
  }
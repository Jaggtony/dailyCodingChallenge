/*You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
prep
p:given an array of numbers, can be negative, is unordered, and can be empty, no strings
r:return the difference in the largest and smallest numbers
e:[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
*/
function maxDiff(list) {
    return list.length>1 ? Math.max(...list)-Math.min(...list) : 0
    } //check if array is larger than 1
      //if it is the subtract the largets and smallest numbers using the math proto
      //if array isnt larger than 1 retirn 0
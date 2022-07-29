/*Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

prep
p:given an array of numbers between 0-9 with 1 missing number
r:return missing number
e:[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/
function getMissingElement(superImportantArray){
    let tot =0 //variable for final
    let arr = superImportantArray.sort((a, b)=>a-b) //set an array in order to match up to
    for (let i=0;i<=arr.length;i++){ //basic for loop
      if (i==arr[i]){ //if the arr index matches the counter index add 1 to the total
        tot++
      }
    }return tot //return answer
  }
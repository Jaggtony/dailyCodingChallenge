/*A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .
prep
p:given a number
r:return weather of notht e given number is tidy
e: (tidyNumber(9672),false)
*/
function tidyNumber(n){
    const arr=n.toString().split('') //turn number into a string and split it
    for (let i=0;i<arr.length-1;i++) //loop through each element
    {
    if (arr[i]<=arr[i+1]){continue} //check if the next item is bigger or smaller
    else { return false} 
    }
    return true
  }
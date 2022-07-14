/*You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
prep
p:given an array of numbers and a limit
r:return weathe or not the numbers in the array are over or under the limit
e:[66, 101], 200), true
*/
function smallEnough(a, limit){
    return a.every(v=>v<=limit)
   }  //return a truth or false if every value is less than the limit
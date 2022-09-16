/*You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

prep
p:given an array of numbers and a seperate number acting as a limit both as thier own arguments
r:return weather or not all the numbers in the array are less than or equal to the limit number
e:([66, 101], 200), true);
([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
([101, 45, 75, 105, 99, 107], 107), true);
*/
function smallEnough(a, limit){
    let ord = a.sort((a, b)=> b-a) //set variable to equal the given aray but sorted greatest to least
    if(limit>=ord[0]){ // set condition to return true if the limit number is greater or equal to the largest number in the array
      return true
    }else{return false} //condition for everything else
   }  
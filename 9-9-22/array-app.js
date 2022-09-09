/*iven a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.
prep
p:given 2 numbers. a divisor and a bound number
r:return the closest number to the bound number that is divisable by the divisor
e:maxMultiple(2,7),6)
*/
function maxMultiple(divisor, bound){
    let final = 0 //set up variable to return as final
    for (let i =0; i<bound+1;i++ ){ // for loop that ends at the bound number
      if (i % divisor == 0){ //condition to see if number is divisable 
        final = i //if it is then our variable is set or replaced by the next highets number
      }
    }return final
  }
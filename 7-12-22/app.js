/*Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

prep
p:given a divisor number and a number to make an array length on
r:return the largest number in the that can be divided by the divisor counting down starting with the bound value
e:maxMultiple (2,7) ==> return (6)
*/
function maxMultiple(divisor, bound){
    return bound-bound%divisor
   }  // take the modulus of the bound and subtract that from bound

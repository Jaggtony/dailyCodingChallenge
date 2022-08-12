/*Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
prep
p:given an array of numbers and maybe strings. can be negative and empty
r:return the odd numbers cubed then added
e:[1, 2, 3, 4]), 28
*/
function cubeOdd(arr) {
  let total = 0 //running total variable
for (let i = 0 ; i <arr.length;i++){ //for loop
 if (typeof arr[i] === 'string'){ //checking for strings for make undefined
   return undefined
 }
  else if (arr[i] % 2 !==0){  //checking for odds condtional
    total = total + (arr[i]*arr[i]*arr[i])
  }
}
return total


}
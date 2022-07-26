/*Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

prep
p:given ana rray of numbers, can be negative and wont be empty
r:return the amount of even nunbers with the given peramater
e:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/
function evenNumbers(array, number) {
    let array2 = array.reverse().filter(x=> x % 2 ==0) //set up new array after filteringout the evens and reversing it
    let arr3=[] //spot to put last product
    for (let i =0; i<number;i++){ //loops
      arr3.push(array2[i]) // push the items into variable and stop at the given amount
    }return arr3.reverse() //return the final but reversed
  }
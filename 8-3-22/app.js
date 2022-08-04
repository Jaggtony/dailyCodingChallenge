/*Given an array/list [] of integers , Find the product of the k maximal numbers.
prep
p:given an array of at least 3 numbers and a size number
r:return the nth amount of the highest integers multiplied
e: maxProduct ({4, 3, 5}, 2) ==>  return (20)
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
*/
function maxProduct(numbers, size){
    numbers=numbers.sort((a, b)=> b-a)  // sort the array in order from least to greatest
    let tot = 1 //set value to multiply to 
    for (let i = 0 ; i<size;i++){ //for loop set to stop at given size number
      tot = tot * numbers[i] //multiply these numbers to the total
    }return tot //return the final answer
  }
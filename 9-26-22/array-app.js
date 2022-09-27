/*
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
prep
p:given an array of numbers
r:return the 3 biggest numbers added up. no repeating numbers
e:([3,2,6,8,2,3]),17)
*/

function maxTriSum(numbers){
    numbers=numbers.sort((a, b)=> b-a) //sort numbers largest to smallest
    let arr= 0 //variable for final total
    let tick = 0 //to keep track of how many numbers weve added
        for (let i=0 ; tick< 3; i++){ //loop set to end when ticker hits 3
      if (numbers[i] !== numbers[i+1]){ //condition to see if its a repeating variable
        arr += numbers[i] //if its not add it to the total and add 1 to the ticker
        tick ++
      }
    }return arr
  }
/*Given an array of N integers, you have to find how many times you 
have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.*/

//prep
//p:array of at least 3 all positive numbers
//r:return statement
//e:minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)  /  minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
function minimumSteps(numbers, value){
    numbers.sort((a, b)=>a-b)  //sort smallest to biggest to make it easier to get the smallest first
    let x =0  //bucket for position ticker 
    let y= 0  //bucket to add up and later compare to the value
    for (let i= 0; i<numbers.length;i++){  //basic for loop
      y+=numbers[i]  //add the number at the index to bucket for compairison 
      if (y<value){ //if compare bucket is less than our given value add 1 to ticker bucket
        x+=1
      }
      
    }
    return x  //return final
  }
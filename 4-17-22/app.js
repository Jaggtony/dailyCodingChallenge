//Given an array of integers.
//
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// 0 is neither positive nor negative.
//
//If the input is an empty array or is null, return an empty array.
//
//Example
//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {  //condition for null and empty array
        return [];
      }
    let a =0 //set veraibles for return later
    let b =0
    for ( let i = 0 ; i <input.length;i++){  //set up loop to iderate through array 
      if (input[i]>0){ //condition for positive
        a+=1
      }else if (input[i]<=0){ //condition for negatives and 0
        b+= input[i]
    }
      return [a, b];  //return answer
}
  }
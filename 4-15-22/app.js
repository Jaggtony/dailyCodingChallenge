//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let newArr =0;  //set up new bucket to put my added numbers into
    for (let i =0; i<arr.length;i++){ //make the function iderate through each item in the array
      if (arr[i] > 0){ //set conditional on weather to add to newArr or not
        newArr =newArr + arr[i] //add to new arr
      }
    }
    return newArr; //return dat ish
  }
  
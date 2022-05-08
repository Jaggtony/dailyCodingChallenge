//I'm new to coding and now I want to get the sum of two arrays...
//actually the sum of all their elements. I'll appreciate for your help.
//
//
//P.S. Each array includes only integer numbers. Output is a number too.

//function arrayPlusArray(arr1, arr2) {
//    return arr1 + arr2; //something went wrong
//  }
function arrayPlusArray(arr1, arr2) {
    let newArr1 =arr1.reduce((a, b)=>a+b, 0) //set up variables to take in each array added up
    let newArr2 =arr2.reduce((a, b)=>a+b, 0)
    
    return newArr1 + newArr2; //add each array
  }
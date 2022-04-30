//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.

function find_average(array) {
    let arrayNew = array.reduce((a, b)=> a+b, 0) //set up new variable equal to all item in array added up
    arrayNew=arrayNew/array.length //divide new variable by its length
    return arrayNew || 0; //return the average or 0 if array is empty
  }
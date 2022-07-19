/*JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

prep
p:given an array of numbers
r:return the array with only evens using the filter method
e: getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/
function getEvenNumbers(numbersArray){
    return numbersArray.filter(x=> x % 2 ==0)
  } //return the array after using the filter method to filter anything that has a modulus remainder of 0
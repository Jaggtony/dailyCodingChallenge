/*JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
prep
p:given an array of numbers. wont be empty, can be negative
r:return all the even numbers
e:getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/
function getEvenNumbers(numbersArray){
    return numbersArray.filter(x=> x % 2 == 0)
  } //use the filter array to return all the even numbers

  const getEvenNumbers = (numbersArray) => numbersArray.filter(x=> x % 2 == 0)
  //same thing as an arrow function
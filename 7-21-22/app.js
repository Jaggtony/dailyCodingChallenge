/*Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

prep
p:given an array of number, can be nagative
r:retun the two largest tiems mext to eachother multiplied
e:adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
*/
function adjacentElementsProduct(array) {
    let newArr = []  //set up array to push items to
    for (let i =0; i<array.length-1;i++){ //loops
      newArr.push(array[i]*array[i+1]) //push the current element and the next element multiplied
    }return Math.max(...newArr) //return the max number of the array
  }
  
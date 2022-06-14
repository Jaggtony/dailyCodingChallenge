/*Given a number n and two values firstValue and secondValue,
 build an array of size n filled with firstValue and secondValue alternating.


 prep
 p:a number and 2 single variables
 r:return the 2 variables alternating the amount of given numbers
 e:for input:                5, true, false
    expected result would be: [true, false, true, false, true]
 */

 function alternate(n, firstValue, secondValue){
    let arr =[] //set up array to add to
    for (let i = 1 ;i<n+1;i++){ //for loop to go theough the amoung given by variable n
      if (i % 2 !== 0){ //condition to add first value
        arr.push(firstValue)
      }else{
        arr.push(secondValue) //condition to add second value
      }
    }return arr //return product
    }
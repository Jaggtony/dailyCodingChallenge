/* Write a small function that returns the values of an array that are not odd.
prep
p:All values in the array will be integers.
r:Return the good values in the order they are given.
e: [0,1,2,3] ), => [0,2]
*/
function noOdds( values ){
    let arr2 =[]  //set up bucket
    for (let i =0;i<values.length;i++){  //for loop to go through everything
      if (values[i] % 2 == 0){ //conditions for if even
        arr2.push(values[i]) //add even to the bucket
      }
    }return arr2 //return final
    }

    //or

    function noOdds( values ){
        return values.filter(x=> x % 2 == 0)//return everything thats even using filter
    }
//Given an array/list [] of integers , 
//Find The maximum difference between the successive elements in its sorted form.

//prep
//p: always an array of at least 3 numbers
//r:return statemsnt
//e:maxGap ({13,10,5,2,9}) ==> return (4) / maxGap ({-3,-27,-4,-2}) ==> return (23)
function maxGap (numbers){
    let num = numbers.sort((a, b)=>a-b)  //sort origional array and store it in a new variable
    let sum = num[1]-num[0]     //make variable sum be the lowest difference to use later as a base
    for (let i = 0;i<num.length;i++){ //loop through each element
      if (num[i+1]-num[i]>sum)  //conditional for the subraction if it is larger htan our base
        sum = num[i+1]-num[i] //replace woth new higher difference
    }
    return sum //return it
  }
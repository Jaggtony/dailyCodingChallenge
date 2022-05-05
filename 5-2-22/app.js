//Given a string of digits, you should replace any digit below 5 with '0'
//and any digit 5 and above with '1'. Return the resulting string.
//
//Note: input will never be an empty string

function fakeBin(x){
    let arr=[]   //set up variable for an array to add to
    for (let i=0 ; i<x.length;i++){  //set up loop to go through each element
      if (x[i]<5){  //if condition if array is less than 5 add a 0 to the array
        arr+=0
      }else{arr+=1} //if over 5 add 1 to the array
    }return arr //return the data
  }

  function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
} //set up return, split the string to an array, map through the array to see if the element is less than 5,  
//if yes then its 0 else its 1, lastly use join to bring back together the string
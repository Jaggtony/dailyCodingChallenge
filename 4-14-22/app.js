//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//
//Example:
//
//["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
//None of the arrays will be empty, so you don't have to worry about that!


function removeEveryOther(arr){
    let newArr =[];//make new array to push to
    for(let i= 0 ; i< arr.length;i+=2){//set up loop to select every other item
      newArr.push(arr[i])//push each new item to the end of the newArr
      
    }
    return newArr
  }
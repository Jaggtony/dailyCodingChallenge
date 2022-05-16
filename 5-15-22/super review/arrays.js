//Create a function that takes in an array of numbers.
// Return a new array containing every even number from the original array (do not use map or filter)
function arraysssss(arr){
    let arr=[]
    arr.forEach(x=>{
        if(x%2===0){
            arr.push(x)
        } 
    })
    return arr
}
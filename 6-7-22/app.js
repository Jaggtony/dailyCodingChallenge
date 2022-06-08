/*Given a list of digits, return the smallest number that could be formed from these digits, using 
the digits only once (ignore duplicates).

prep
p:list of digits in a string
r:return as an array of numbers
e:minValue ({1, 3, 1})  ==> return (13)

*/
function minValue(values){
  let x =[]  //make a bucket array
  values =values.sort((a, b)=>a-b)  //sort our given array from least to greatest
  for (let i=0;i<values.length;i++){ //for loop to go through each index item
    if (values[i] !== values[i+1]){ //conditional checking if the next number is equal to it or not
      x+=values[i] //if not equal ad it to the array
    }
  }
  return parseInt(x) //turn string to numbers
}
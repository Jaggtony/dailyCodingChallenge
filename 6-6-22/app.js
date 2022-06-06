/*Given an array of integers , 
Find the minimum sum which is obtained from summing each Two integers product .

prep
//p always even array of numbers
//r return statemnt
//e minSum({5,4,2,3}) ==> return (22)
*/
function minSum(arr) {
  arr.sort((x,y)=>x-y) //get array organized smallest to big
  s=0 //make a bucket ro return
  while(arr.length)s+=arr.pop()*arr.shift() //simple while loop adding the popped and shifted elements of the array after multiplying them
  return s
}
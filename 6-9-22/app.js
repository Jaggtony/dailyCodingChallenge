/*In this kata you get the start number and the end number of a region
 and should return the count of all numbers except numbers with a 5 in it. 
The start and the end number are both inclusive!

prep
p:The result may contain fives. 
The start number will always be smaller than the end number. Both numbers can be also negative!
r:return the amount of numbers without a '5' in it
e:1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12*/

function dontGiveMeFive(start, end)
{
  let arr =0  //variable for counter
  for (let i = start ;i<=end;i++){ //loop for the start and beginning
    if( !i.toString().includes('5')){  //make i a string and if it doesnt incluse '5' add 1 to the ticker
      arr+=1 //ticker getting one
  }
  }
  return arr //final return
}
/*Your task is to determine how many files of the copy queue you will be
 able to save into your Hard Disk Drive. 
The files must be saved in the order they appear in the queue.

prep
p: given an array of numbers and an hd size to fill
r:return how many files can fit in the hd with no over flow
e:save([4,4,4,3,3], 12) -> 3


*/

function save(sizes, hd) {
    let hdTot =0   //create variables to compare
    let bucket = 0
    for(let file of sizes){  //loop through each element
      if ((hdTot+file)<=hd){//set comditional for if the files over flow the hd
      hdTot +=file //add to total to compare to hd
      bucket++ //add to item total
    }  else {return bucket }  //condition for if over flow
      }
    return bucket //return final
  }
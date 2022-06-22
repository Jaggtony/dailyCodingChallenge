/*Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that 
repeat an odd number of times while keeping everything else the same.

prep
p: given an array of numbers,  can be empty
r: return all numbers that hav an even amount
e:oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]



*/
function oddOnesOut(nums) {
    return nums.filter(n=> nums.filter(x=> x ===n).length % 2 === 0) 
  }  //use the inside filter to grab an element and fins all its equals and use the outer filter to check if therers an even or odd amount
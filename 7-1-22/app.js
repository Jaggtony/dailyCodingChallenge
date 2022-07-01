/*Given an array of integers, 
remove the smallest value. Do not mutate the original array/list. 
If there are multiple elements with the same value, remove the one with a lower index. 
If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

prep
p:always an array of integers  
r:return the origional array without the smallest number
e:
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]


*/

function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));  //set a variable as the smallest number in the array
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)]; //slice the array omitting the set variable
  }
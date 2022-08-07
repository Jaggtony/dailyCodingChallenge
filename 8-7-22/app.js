/*Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.


prep
p:given an array of numbers, can be empty
r:return how many numbers are needed to make the given array a sequential array from the smallest to largest number in given array
e:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.
*/
function consecutive(arr) {
    let total = Math.max(...arr)-Math.min(...arr)+1 //set variable for the total by subtracting the largest number by hte smallest number and adding one to geth the array size we need for all numbers
    for (let i = 0; i<arr.length;i++){ //simple loop
      total -= 1 //for each item minus one from the total
    }if(total === -Infinity){ //condition to take care of empty arrays
      return 0
    }else{
    return total}
  }
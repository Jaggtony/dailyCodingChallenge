/* 
given an array of numbers, return all pairs the add up to a given sum. numbers can be used more than once
*/

function twoSum(arr, sum){
    const pairs = []
    const nums = {}
    for(const num1 of arr){
        const num2 = sum - num1
        if(nums[num2]){
            pairs.push([num1, num2])
        }else{
            nums[num1]= 1
        }
    }return pairs
}
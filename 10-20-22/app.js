/*You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
prep
p:given  an array of numbers. some doubles and some individual 
r:return the sum of the numbers that only occur once
e:[4,5,7,5,4,8]),15
*/
const repeats =(arr) => arr.filter(n=> arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a, b)=> a+b, 0)
    // filter array to all single values->  reduce
    //index of num is last index of num
     

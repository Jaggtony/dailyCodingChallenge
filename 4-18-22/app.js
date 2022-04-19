//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//Note: The function accepts an integer and returns an integer

const squareDigits=(num)=>Number((num + '').split('').map(i=>(i*i)).join(''));
//use number to make sure we have no strings,
//add a place to num to be able to use split so we can 
//map through the array squaring each element in the array
//join each element back together
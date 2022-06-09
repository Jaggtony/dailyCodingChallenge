/*For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input.
 Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). 
Write a function where you will win the game if your numbers can spell "BINGO". 
They do not need to be in the right order in the input array. Otherwise you will lose. 
Your outputs should be "WIN" or "LOSE" respectively.

rpep
p: array of numbers at least 10, ranging form 1-26
r: return win or lose
e:bingo([1,2,3,4,5,6,7,8,9,10]), "LOSE"
*/

const bingo =(a)=>[2,9,14,7,15].every(x=>a.includes(x)) ? 'WIN' : 'LOSE'

//make array of bingo values, check to see if every element is included in the given array 'a' and return win if yes and lose if no
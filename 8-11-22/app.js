/*Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.

prep
p:given an array of strings
r:return the strings joined in any manner of way differently than whats given but still in an array
e:a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
*/
function partlist(arr ) {
    return arr.map((x, i)=> [arr.slice(0, i).join(' '),arr.slice(i).join(' ')]).slice(1)
  } //change the origional function with map. in an array slice the first part at 0 to the index at the time. and slice again for the rest of the array
  
  
  
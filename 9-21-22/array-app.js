/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.
prep
p: given an array of letters
r:return the array numbered with the letters
e:["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/
var number=function(array){
    return array.map((e, i)=>{ //use map to change the array using the element and the array
      return (i+1)+ ': ' + e //return the index + 1 to the collin and the element from the array
    })
   }
   
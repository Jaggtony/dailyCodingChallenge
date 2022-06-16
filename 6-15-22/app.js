/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

prep
p:always an array of strings
r:return the new array with the counter on it
e:["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

var number = function(array) {
    return array.map(function(line, index){  //map to loop through the line and index
      return (index+1)+': '+line;    //return the index +1 and the line
    })
  }
  
  
  
  
  
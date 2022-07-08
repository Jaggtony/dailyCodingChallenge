/*Write a function which takes a list of strings and 
returns each line prepended by the correct number.

prep
p:The numbering starts at 1. The format is n: string. Notice the colon and space in between.
r:return array of strings numbered
e:["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

*/
var number = function(array) {
    return array.map(function(line, index){  //return array being mapped through with the element and index
      return (index+1)+': '+line;    //for the return, return the index of the element +1 since index starts at 0
                                     //add in the ':' and the element its self as well
    })
  }
  
  
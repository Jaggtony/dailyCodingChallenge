/*Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
prep
p:given an array of strings
r:convert strings into numbers
e:
["1", "2", "3"] to [1, 2, 3]*/
function toNumberArray(stringarray){
    let arr = stringarray.map(Number) //set variable to equal the origional array mapped and converted to numbers
    return arr // return the vinal variable
  }
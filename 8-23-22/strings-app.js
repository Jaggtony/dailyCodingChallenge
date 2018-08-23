/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
prep
p:given a variable that represents a string
r:return the string without the first and last characters
e:['asdf']=>['sd']
*/
function removeChar(str){
    return str.slice(1, -1)
   //return everything starting at the first index cutting off the first element and end at the -1 index cutting off the last element
  
  };
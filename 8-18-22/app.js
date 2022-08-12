/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
prep
p:given a string of words, never empty
r: return the length of the shortest word
e:"Let's travel abroad shall we"), 2
*/

function findShort(s){
    s = s.split(' ').sort((a, b)=> a.length- b.length) //make string an array and sort it by length
    return s[0].length //return the length of the 0 index
  }
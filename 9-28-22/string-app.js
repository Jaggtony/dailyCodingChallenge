/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
prep
p:given a string 
r:return the string with all the words reversed in place NOT the whole string
e:('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god')
*/
function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
  }  //split and reverse the string as a whole and join it back to a string
     //then reverse the string at the spaces so it reverses it by index not element
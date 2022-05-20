/*You will be given a vector of strings. You must sort it alphabetically 
(case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.*/

//prep
//p:a n array of strings
//r:return the first string with stars insterted in between each letter
//e:below
function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }  //return s after using sort and splitting the first index to an array and joining it back with *** between each element
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])// 'b***i***t***c***o***i***n'
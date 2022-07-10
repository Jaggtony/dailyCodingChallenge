/*Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
prep
p:given an array of strings
r:return the array in order by string length
e:["Telescopes", "Glasses", "Eyes", "Monocles"] => ["Eyes", "Glasses", "Monocles", "Telescopes"]
*/
function sortByLength (array) {
    return array.sort((a, b)=> a.length-b.length)
  }; //return the array using the sort method, sorting by length of the array items
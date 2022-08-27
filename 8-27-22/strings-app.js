/*Write a function that returns a string in which firstname is swapped with last name.
prep
p:given a string of a name. first and last
r:return the last names in revers still in a string
e:"john McClane" --> "McClane john"
*/
function nameShuffler(str){
    str = str.split(" ") //split the string to an array
    let str1 = [str[1]+" "+str[0]] //brute force the return 
    return str1.join(" ") //return as an array
  }

  function nameSuffle(str){
    return str.split(' ').reverse().join(' ') //split the array to a string then reverse it then join it back to a string
  }
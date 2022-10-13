/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 
prep
p:given 2 strings of letters, can be empty. seems to be no numbers 
r:return weather or not the 1st string ends with the second string
e:solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/
function solution(str, ending){
    return str.endsWith(ending) //use method ends with to return boolean of weather of not the 1st string ends with the second string
  }
/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
prep
p:given a string of words/letters
r:return weather the string has any letters that appear twice
e:"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/




function isIsogram(str){
    var i, j; //set variables
    str = str.toLowerCase(); //send to lowercase 
    for(i = 0; i < str.length; ++i) //first loop
      for(j = i + 1; j < str.length; ++j) //loop each element on the array
        if(str[i] === str[j]) //if any of the elements match return false
          return false;
    return true; //otherwise return true
  }
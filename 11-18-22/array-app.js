/*Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
prep
p:given a string of letters, some uppercase and some lowercase
r:return the index of all the uppercase letters
e:Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/
var capitals = function (word) {
    let arr= []
      for (let i= 0 ;i<word.length ; i++ ){
      if (word[i] !== word[i].toLowerCase()){
        arr.push(word.indexOf(word[i]))
      }
    }return arr
  };
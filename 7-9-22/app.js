/*Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

prep
p:given a string of letters
r:return the indexes of all the capital letters
e:Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/

var capitals = function (word) {
    let arr =[] // set up bucket for index numbers
      for (let i =0; i<word.length;i++){  //simple loop
      if (word[i] === word[i].toUpperCase()){ //conditional to check if letter is upper case
        arr.push(i) //if uppercase push the index to the end of the bucket array
      }
    }return arr //return the final
  };
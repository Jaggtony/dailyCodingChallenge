/*Complete the solution so that it reverses all of the words within the string passed in.
prep
p:given a string of words
r:return the string in reverse
e:"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

function reverseWords(str){
    let setStr = str.split(' ') //make a new variable that is tthe given string split into an array
    setStr.reverse() //reverse the new array
    return setStr.join(' ') // return the new array joined into a string
  }
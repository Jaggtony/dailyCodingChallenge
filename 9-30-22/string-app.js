/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
prep
p:given a 1 word string
r:return the middle letter or letters of the string
e:
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
*/
function getMiddle(s){
    let div = s.length/2 //set a variable for find the half length of the string
    s= s.split('') //make an array of s so we can use its index
    if(div % 1 === 0){ //condition ofr even numbers
      return [s[div-1], s[div]].join('') //return the half number and the one beofre it the join so its not returning an array
    }else {return s[div-.5] } //else return the middle -.5 to get the middle element
  }
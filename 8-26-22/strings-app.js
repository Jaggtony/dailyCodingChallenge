/*An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.
prep
p:given a string of letters and a 1 character string
r:return the i character string repeated as many times as the longer string is long
e:
text before = "abc"
character   = "z"
text after  = "zzz"
*/
function contamination(text, char){
    text = text.split('') //make both strings arrays
    char = char.split('')
    let final = [] //make an array variable to add to for final asnwer
    for (let i=0; i <text.length;i++){ //loop as long as text variable
      final.push(char) //each loop push char variable into the final to return
    }return final.join('') //return the answer joined back into a string
  }
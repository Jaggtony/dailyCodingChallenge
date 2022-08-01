/*Modify the spacify function so that it returns the given string with spaces inserted between each character.

prep
p:given a string
r:return the string with spaces between each element
e:spacify("hello world") // returns "h e l l o   w o r l d"
*/
function spacify(str) {
    let arr =[] //set up variable to add to
    for (let i= 0 ; i<str.length;i++){ //loop through each element
     arr += str[i] + " "  //add that element to the variable to return later
    }return arr.slice(0, -1) //return arr without the last space using slice
  }
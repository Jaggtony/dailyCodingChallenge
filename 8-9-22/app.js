/*Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
prep
p: given a string
r: return the string as scrolling text
e:
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
  */

function scrollingText(text){
  text = text.toUpperCase(); //make everything uppercase

  return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
}   // return the argument after adjusting it with map, slice the index number and plus it with the other sliced pice 
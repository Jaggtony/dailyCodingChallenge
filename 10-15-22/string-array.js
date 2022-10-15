/*All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
prep
p:given 2 variables. each variable is a 2 word name. one is the name of an animal and one is a dish 
r:return true or false weather or not the fost and last letters of the animal and food match
e:
"great blue heron", "garlic naan"), true
"brown bear", "bear claw"), false
*/
function feast(beast, dish) {
    return [beast[0],beast[beast.length -1]].join('') == [dish[0],dish[dish.length -1]].join('') ? true : false
  } //used a ternary to match the first and last characters of the given words
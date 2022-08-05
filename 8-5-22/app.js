/*You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!

prep
p:given a broken push method attempt
r:return the attempt so it runs
*/

//given:
items = []
items.push {a: "b", c: "d"}

//altered:
items = []  //setting up array to be pushed to 
items.push({a: "b", c: "d"}) //moved the object inside a pair of parenthesis
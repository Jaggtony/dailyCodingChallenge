/*Write a function that takes an array and counts the number of each unique element present.
prep
p:given an array of names
r:return the names with a counter of how many times the name was listed
e:
count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}*/
function count(array){
    return array.reduce(function (stack, value) {
      return stack[value] ? stack[value]++ : stack[value] = 1, stack;
    }, {});
  }
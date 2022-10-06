/*Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]


prep
p:given a variable that will be a name, never empty or numbers
r:return  the variable inside the given string in the place that says <name>
e:(greet("Ryan"), "Hello, Ryan how are you doing today?"
*/
function greet(name){
    return `Hello, ${name} how are you doing today?`
  } //used ticks to use a template literal and add the given name argument into it with the dollar hash
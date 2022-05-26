//I would like to be able to pass an array with two elements to my swapValues function to 
//swap the values. However it appears that the values aren't changing.
//
//Can you figure out what's wrong here?


/*function swapValues() {
    var args = Array.prototype.slice.call(arguments);  this could just be the argument
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;         there is nothing to return it
}*/
//prep
//p:always numbers in pairs of twos
//r:simple return
//e:[1,2]=>2,1



function swapValues(args) {  //moved args to be a perameter
    
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
  return args     //return args after variables are reassigned
}
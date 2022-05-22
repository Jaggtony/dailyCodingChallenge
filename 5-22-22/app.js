/*What we want to implement is Array.prototype.filter() function, just like the existing 
Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

The usage will be quite simple, like:

[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.
p:number in an array, can be 0
r:return statement
e:above

*/
Array.prototype.filter = function( ruleCondition ) {
    // Create an empty array to store the values that satisfy the ruleCondition
      var arr = [];
      
      this.forEach( function( currentValue ) {
      // Evaluate each element and push the value when content in array meet condition
        if( ruleCondition( currentValue ) ) arr.push( currentValue );
      });
      return arr;
    }
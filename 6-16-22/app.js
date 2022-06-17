/*given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
There will be only 1 arrow '>' and 1 target 'x'
An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
prep
p:given a 4by4 matrix of string elements
r:return true if the '>' is pointed towards the 'x'
e:
    [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', '>', ' ', 'x'],
      [' ', ' ', '', ' ', ' ']
    ]), true);

*/
const solution = mtrx => 
 mtrx.some(val=> />.*x/.test(val));
   //testing the value to test weather it matches the value matches

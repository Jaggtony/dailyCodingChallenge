/*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

prep
p:always a number,  non negative
r:return the nth row
e:1 -->  1
  2 --> 3 + 5 = 8

*/
function rowSumOddNumbers(n) {
  return n*n*n    //just multiply the variable by its self 3 times
}
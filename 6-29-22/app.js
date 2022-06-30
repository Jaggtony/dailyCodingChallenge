/*Ronny the robot is watching someone perform the Cups and Balls magic trick. The magician has one ball and three cups, 
he shows Ronny which cup he hides the ball under (b), he then mixes all the cups around by performing multiple two-cup switches (arr).
 Ronny can record the switches but can't work out where the ball is. Write a programme to help him do this.

 prep
 p:There will only ever be three cups.
Only two cups will be swapped at a time.
The cups and their switches will be refered to by their index in a row of three, beginning at one. So [[1,2]] means the cup at position one, is swapped with the cup at position two.
Arr will be an array of integers 1 - 3 organised in pairs.
There won't be any empty sub-arrays.
 r:If arr is just an empty array b should be returned.
 e:
 (b) = 2, (arr) = [[1,2]]

The ball is under cup number : 1

 */

const cupAndBalls =(ball, arr) =>
  arr.reduce((ball, [a, b]) => a == ball? b : b== ball? a : ball, ball)
//reduce given array, use ball as a recurring variable, check to see if a or b match the ball variable, if so swap them, if they dont match ball stays the same



/*You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

    Note:Returning the pattern is not the same as Printing the pattern.

Rules/Note:

    If n < 1 then it should return "" i.e. empty string.
    There are no whitespaces in the pattern.

prep
p:given a number, can be empty
r:return a pattern where the number is printed as many times as it is, starting at 1 going to the given value
e:
1
22
333
....
.....
nnnnnn
*/
function pattern(n) {
    var res = [], i;
    for(i = 1; i <= n; i++) {
      res.push(Array(i + 1).join(i));
    }
    return res.join('\n');
  }
/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
prep
p:given an array and a value
r:return weather the value is in the array or not
e:([66, 101], 66), true)
*/

const check = (a, x) => a.includes(x)
//use inclueds method to return true or false
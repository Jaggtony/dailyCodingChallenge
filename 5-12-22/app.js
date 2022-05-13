//You will be given an array a and a value x. 
//All you need to do is check whether the provided array contains the value.
//
//Array can contain numbers or strings. X can be either.
//
//Return true if the array contains the value, false if not.
//prep
//p:any element type
//r:return statement
//e:

function check(a, x) {  //set up a function with the perameters a, x 
    return a.includes(x) //set up a return 
                        //use includes method on the a element to see if x is included in it and will return a true or false
  }

assert.strictEqual(check(['t', 'e', 's', 't'], 'e')) //true
assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat')) //false
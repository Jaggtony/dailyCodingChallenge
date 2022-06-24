/*In this Kata, you will learn how to remove all empty 
items in an Array.
In JavaScript, empty items in arrays can be declared by 
[1, 2,,,3, 4] (Multiple commas without a value in that index)
The values that are not given a value are empty items, 
and usually add up with others to form <# empty items>; In the example,
 <2 empty items> 
 
 prep
 p:array with numbers and strings. 
 r:return array with no empty items,  null and undefined ok
 e:
 Before: [1, 2, 3, <5 empty items>, 4, <1 empty item>, null, undefined];

After: [1, 2, 3, 4, null, undefined];
 
 */

function clean(arr) {
    return arr.filter(x=> x !== 'empty item')
  } // use filter to return everything that isnt empty
  
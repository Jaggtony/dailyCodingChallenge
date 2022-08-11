/*Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).
prep
p:given an array of numbers and a number to represent an incex number
r:return the next largest number to the one that lines up with the given index
e:leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
*/
function leastLarger(a,i) {
    return a.indexOf(Math.min(...a.filter(n => n > a[i])))
  } //return the index of the minimum number filtered that is larger than a[i]
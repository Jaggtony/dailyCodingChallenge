/*
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.
prep
p:given multiple arrays with varrying items inside
r:return the arrays flattened by one level
e:flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
*/
var flatten = function (array) {[].concat(...array)}//onto a new array, concat the items of array
/*The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].
The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

prep
p:given ana rray of numbers at lesast 2
r:return the 2 highest numbers
e:
[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]

*/
function twoOldestAges(ages){
    return ages.sort((a, b)=> a-b, 0).slice(-2, ages.length)
  // return ages after sorting smallest to largest and then slicing the last two items
    
  }
  
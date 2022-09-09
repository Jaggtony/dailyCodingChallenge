/*Complete the solution so that it reverses the string passed into it.
prep
p:given a string of letters
r:return the string reversed
e:
'world'  =>  'dlrow'
'word'   =>  'drow'*/
const solution=(str)=>str.split('').reverse().join('')

function solution(str){
  return str.split('').reverse().join('')
}
//both cases youre splitting the string int an array then reversing it and finally joining it back into a string
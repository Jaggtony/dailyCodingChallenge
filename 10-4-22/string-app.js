/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
prep
p:given a string of letters, can be empty, caps or lowercase
r:return string adjusted so each element in the string is repeated the number of time as the index number with a '-'between the different letters
e:"ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")
*/
function accum(s) {
	let x = [] //set up array to push to
  for(let i = 0 ; i < s.length;i++){ //loop through the array
    x.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i)) 
    //for each element push the character at the current
    // index in uppercase 1 time and add it to the character at the current index in loswer case but 
    //use repeat with the ideration number as the argument
  }return x.join('-') //return the array joined with the dash between each different element
 }

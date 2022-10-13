/*


    You are to write a function that takes a string as its first parameter. This string will be a string of words.

    You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

    Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

prep
p:given a string variable, and 2 number variables. the first number 'loc' is the index and 'num' is the number of elements needing to be printed
r:return the loc of the string printed as many times as the num var says as a string
e:modifyMultiply ("This is a string",3,5)  => "string-string-string-string-string"
*/
function modifyMultiply (str,loc,num) {
    let str2 = str.split(' ') //make a variable to not change the origional string. 
    let word = str2[loc] //make a variable that equals the element we want
    let arr = [] //an array to push everything to
    for(let i =0 ;i<num;i++){ //loop as long as the given number
      if (i==num-1){ //condition for last element being pushed
        arr.push(word)
      }else{arr.push(word+'-')} //everything else
    }return arr.join('') //return it joined so it isnt an array
  } 
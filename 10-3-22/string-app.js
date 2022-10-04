/* Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
prep
p: given a number in a string
r:replace all but the last 4 digets on the string with # symbols 
e:
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""
                */

                
function maskify(cc) {
    let arr = [] //new array to not change the origional
    let tic = 0 //counter
    for(let i = cc.length-1; i>=0;i--){ //set up loop to go backwards on the given argument
      if(tic <= 3){ //condition for the ticker 
        arr.unshift(cc[i]) //add element to start of set up array
        tic ++ //add one to the ticker
      }else{ arr.unshift('#')} //if ticker is more than 3 send #to the start of the array
    } return arr.join('') //join back to a string
  }
  
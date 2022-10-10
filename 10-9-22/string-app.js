/*Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.
prep
p:given either numbers or a string. 
r:return all the number 2 to 't'
e:tea42('tea') //should return 'tea'
tea42('2ea') //should return 'tea'
*/
function tea42(input) {
    input= input.toString().split('') //turn to string so can be split to looop through
    let arr=[] //new array dunp
    for (let i =0 ; i< input.length;i++){ //loop
      if(input[i]=== '2'){ //condition to replace the 2 with t
        arr.push('t') //push to array dunp
      }else{
        arr.push(input[i]) 
      }
    }return arr.join('') //return it joined bact to a string
  };
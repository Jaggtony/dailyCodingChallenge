/*Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
prep
p:given an array of numbers and numbers as strings
r:return the difference in the string numbers and number numbers
e:n([9, 3, '7', '3']), 2)
*/
function divCon(x){
    let y = x.filter(value => typeof value === 'number') //use filter to go through and return all the elements that we want separated
    let z = x.filter(value => typeof value === 'string')
    
    y=y.reduce((a, b)=> a+b, 0)  //add each of them using reduce
    z= z.reduce((a, b)=> a += +b, 0)
    return y-z //return the difference 
  }
  
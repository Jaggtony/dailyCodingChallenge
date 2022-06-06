/*Given an array/list [] of n integers , 
find maximum triplet sum in the array Without duplications .

prep
p: array of at least 3 numbers, can be neg and can be doubles
r:return statement
e:maxTriSum ({3,2,6,8,2,3}) ==> return (17)
*/
function maxTriSum(numbers){
    let ticker =0 //bucket to keep a timer
    let total = 0 //bucket for total
    numbers = numbers.sort((a,b)=>b-a)  //sort the array from greatest to least
    for (let i = 0;ticker<3;i++ ){  //for loop endign when ticker is at 3
      if(numbers[i] !== numbers[i+1]){ //conditional to get rid of doubles
        total += numbers[i] //add to total
        ticker+=1 //add to ticker
      }
    }
    return total  //final return
  }
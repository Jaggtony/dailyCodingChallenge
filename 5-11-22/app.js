//Given a non-empty array of integers, return the result 
//of multiplying the values together in order. Example:
//
//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    return x.reduce((a, b)=> + a*b, 1)
   } //have return set up to return a reduce of x where you multiply 2 elements starting at 1
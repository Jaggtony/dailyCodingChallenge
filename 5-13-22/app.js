//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//
//Note: The function accepts an integer and returns an integer
//prep
//p:can be non number, but want a number return
//r:return statement 
//e:

const squareDigits =(num)=>Number((num +'').split('').map(e => e*e).join(''))
        //use Number to make sure were only working with numbers
        //adding the ablitiy to split
        //split each number between eachother to make an array
        //map through each element squaring as you go along
        //join your array back into a string
squareDigits(123) //149
squareDigits(2112) //4114 
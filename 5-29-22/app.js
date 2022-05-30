/*Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers,
 where the first one is the total weight of team 1, and the second one is the total weight of team 2.*/

 //prep
 //p:always a number with array size of at least 1
 //r:return statement
 //e:rowWeights([29,83,67,53,19,28,96]), [211,164] /  [70,58,75,34,91]), [236,92]
 function rowWeights(array){
    let a = 0    //make vriables to store our totals
    let b = 0
    array.forEach((e,i)=>{   //do a foreac to loop through each element and index
      if (i%2===0){ //start conditional for evens by modulus the index
        b+=e  //add to running total
      }else{ //for odd index numbers
        a+=e  //add  to other total
      }
    })
    return [b, a]  //return our totals
  }
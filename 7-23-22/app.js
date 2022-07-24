/* Chef's son Chefu found some matches in the kitchen and he immediately starting playing with them.

The first thing Chefu wanted to do was to calculate the result of his homework —
 the sum of AA and BB, and write it using matches. Help Chefu and tell him the number of matches needed to write the result.

 prep
 p:gicen two numbers to add together
 r:return the amount of matches it will take to make the number that the sum is
 e:
 3
123 234   10
10101 1010   17
*/

function matches(a, b){
    let sum = 0 // make sum variable to add to
    let x = a + b  //add our arguments
for(let i=0; i<x.length; i++){  //start loop
    if(x[i] == "1"){  //set conditions for adding the correct amount of matches
        sum += 2;
    }
    else if(x[i] == "2" || x[i] == "3" || x[i] == "5" ){
        sum += 5;
    }
    else if(x[i] == "4"){
        sum += 4;
    }
    else if(x[i] == "6" || x[i] == "9" || x[i] == "0"){
        sum += 6;
    }
    else if(x[i] == "7"){
        sum += 3;
    }
    else if(x[i] == "8"){
        sum += 7;
    }
}return sum //return the final sum of matches
}
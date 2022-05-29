
/*Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."*/

//prep
//p:array with string for teams and number array for scores
//r:return statement
//e:above for examples
function uefaEuro2016(teams, scores){
    if (scores[0]===scores[1]){   //start if statement for a tie using the index nimber of scores to compare
      return `At match ${teams[0]} - ${teams[1]}, teams played draw.` //using tics to use the array index items in text
    }else if(scores[0]>scores[1]){  //if statement if team 1 wins
      return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    }else{ // final return if team 2 wins
      return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    }
  }
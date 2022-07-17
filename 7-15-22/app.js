/*The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

prep
p:given an array of 4 elements with letters or blank space
r:give back the total score of the test based on the 2 arrays matching
e:
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

*/
function checkExam(array1, array2) {
    let total = 0 //set variable for total score
   for (let i = 0 ;i <array1.length;i++){  //basic loop
     if(array1[i]===array2[i]){ //condition to see if answers match
       total+=4
     }else if (array2[i] == ""){ //checking if the array is empty
       total+=0
     }else{total-=1}//and everything else
   }if (total>0){//set return condition for total to be returned above 0
     return total
   }else{return 0}
  }
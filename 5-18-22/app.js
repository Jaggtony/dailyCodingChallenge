//It's the academic year's end, fateful moment of your school report. 
//The averages must be calculated. All the students come to you and entreat you to calculate 
//their average for them. Easy ! You just need to write a script.
//
//Return the average of the given array rounded down to its nearest integer.
//
//The array will never be empty.

//prep
//p:numbers never string or empty
//r:simple return
//e:below
function getAverage(marks){
    let mark=marks.reduce((a, b)=>a+b, 0) //create variable to store all the added array numbers into
    return Math.floor(mark/marks.length) //use Mmath and floor to make the final product rounded down
    //divide the stored variable by the arrays lenght al in a return 
  }
  getAverage(2,2,2,2) //2
  getAverage(1,2,3,4,5) //3
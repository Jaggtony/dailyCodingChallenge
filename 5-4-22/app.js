//Consider an array/list of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).
//
//For example,
//
//[true,  true,  true,  false,
//  true,  true,  true,  true ,
//  true,  false, true,  false,
//  true,  false, false, true ,
//  true,  true,  true,  true ,
//  false, false, true,  true]
//The correct answer would be 17.
//
//Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    let counter= 0  //set variable to send stuff to for later return
    for( let i = 0;i<arrayOfSheep.length;i++) //or loop to go through everything
      if (arrayOfSheep[i]==true){  //condition looking for truen or not
        counter++ //if its true add to the counter
      }
      
      return counter //return findings
  }
  
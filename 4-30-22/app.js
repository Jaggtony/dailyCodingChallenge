//Can you find the needle in the haystack?
//
//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
//After your function finds the needle it should return a message (as a string) that says:
//
//"found the needle at position " plus the index it found the needle, so:
//
//findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
//should return "found the needle at position 5" (in COBOL "found the needle at position 6")

function findNeedle(haystack) {
    let newHay = haystack.indexOf('needle') //set variable to call on equal to the index number 'needle' was at
    return `found the needle at position ${newHay}` //return the required text along with variable for index number
  }
/*Can you find the needle in the haystack?
Write a function findNeedle() that takes an
 array full of junk but containing one "needle"
After your function finds the needle it should 
return a message (as a string) that says:
"found the needle at position " 
plus the index it found the needle, so:

prep
p:given an array of strings
r:return the index of the needle string
e:["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/
function findNeedle(haystack) {
    return 'found the needle at position ' + haystack.indexOf('needle')
  } //return the string needed plus the method indexof to chek index position on haystack
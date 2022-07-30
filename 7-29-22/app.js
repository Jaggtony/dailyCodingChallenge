/*Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. 

prep
p:given an array of fruits. some rotten
r:replace the rotten 
e:["apple","rottenBanana","apple"] => ["apple","banana","apple"]
*/
function removeRotten(bag){
    return bag ? bag.map(s=> s.toLowerCase().replace(/rotten/ig, '')) : []; 
  } //map through the array, make it all lower case, replace all the 'rotten'words with nothing, otherwise return an rmpty array
    
    
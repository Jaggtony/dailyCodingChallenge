/*You need count how many valleys you will pass.

Start is always from zero level.

Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

One passed valley is equal one entry and one exit of a valley.
prep
p:given a list of commands
r:return weather of not those commands sent you through a valey
e:
(level 1)  __
(level 0)_/  \         _(exit we are again on level 0)
(entry-1)     \_     _/
(level-2)       \/\_/
*/
function countingValleys(s) {
    //here we go again
    let level=0; //set a level to keep track of location
    let valleys = 0; //set the final return as valleys and set to start at 0
    s.split("").forEach(el=>{ //split the string into an array and send through for each loop
      if(level===-1&&el==="U") valleys++; //condition for adding to a valley
      if(el==="D") level-=1; //down for keeping track of a valley
      if(el==="U") level+=1; //up for keeping track of a valley
    })
    return valleys; //return final
  }
/*Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

Go to work!
prep
p:given a string of words
r:if the words in the string say fire, replace it with ~~
e:("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~")
*/
function fireFight(s){
    return s.replace(/fire/gi, '~~')
     //return s after replacing all the 'fire' with '~~'
  }
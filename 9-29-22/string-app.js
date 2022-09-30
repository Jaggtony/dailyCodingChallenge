/*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
prep
p:given a string of words
r:return the string of words without any vowels. uppper case or lower
e:("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
*/
function disemvowel(str) {
    let str2 = str.split('').filter(x => x!=='a' && x!=='e'&& x!=='i' && x!=='o' && x!=='u' && x!=='A' && x!=='E'&& x!=='I' && x!=='O' && x!=='U');
      return str2.join('')
    } //split and filter out all the vowels. join to return 

    function disemvowel(str) {
        return str.replace(/[aeiou]/gi, '');
          
        }

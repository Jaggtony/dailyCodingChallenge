/*You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

prep
p:given an array of objects
r:Your task is to return the number of JavaScript developers coming from Europe.
e:
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
]; =>>> 1
*/


function countDevelopers(list) {
    return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
  } //return the list perameter after filtering, making sure the variables in continent and language match the asked math, then .length to return the length of the array
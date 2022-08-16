/*You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if at least one Ruby developer has signed up; or
false if there will be no Ruby developers.
prep
p:given an array with 2 objects, these objects havep properties in them
r:return weather the language propertie has a ruby developer at all
e:var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
true
*/
function isRubyComing(list) {
    return list.some(x=>x.language == 'Ruby')
    } //returning the tru or false using hte some method to return a true or false if 'Ruby' is in any language properties
  
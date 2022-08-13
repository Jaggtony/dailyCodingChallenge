/*You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up.
prep
p:given an array of objects
r: return weather or not there will be a python developer
e:var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];  ===>Victoria, Puerto Rico.*/

function getFirstPython(list) {
    for (var i=0; i<list.length; ++i)  //start a loop
      if (list[i].language=='Python')  //condition to see if list contains the string python under language
        return list[i].firstName+', '+list[i].country; //if true return
    return 'There will be no Python developers'; //if false return
  }
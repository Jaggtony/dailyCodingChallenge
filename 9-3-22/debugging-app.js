/*The following code is not giving the expected results. Can you debug what the issue is?

The following is an example of data that would be passed in to the function.


prep
p:given a broken code
r:make the code run 
e:var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

getNames(data) // should return ['Joe', 'Bill', 'Kate']

given code :function getNames(data){
  return data.map(function(item){item.name});
}*/
function getNames(data){
    return data.map(item=>item.name);
  } //turned the function inside the map into an arrow function
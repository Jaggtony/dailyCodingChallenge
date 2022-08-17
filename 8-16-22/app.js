/*You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

prep
p:given an array of objects 
r:return the needed properties in the given string
e:
 firstName: 'Lukas',
        lastName: 'X.',
        country: 'Croatia',
        continent: 'Europe',
        age: 35,
        language: 'Python',
        greeting: 'Hi Lukas, what do you like the most about Python?',
*/

function greetDevelopers(list) {
    list.forEach(v=> v.greeting= `Hi ${v.firstName}, what do you like the most about ${v.language}?`)
    return list
    }  //for each element you are adding the greeting propertie using the other properties as instructed
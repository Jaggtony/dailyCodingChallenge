/*Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
prep 
p:given an array of objects
r:add a property to the objects in the array
e:
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

=> var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];
*/
questions.forEach((element)=>{element.usersAnswer = null})
//take the questions variable and alter it with forEach adding usersAnswer = null to the objects
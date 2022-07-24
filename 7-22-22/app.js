/*You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.
prep
given an object with stringk keys and number desctiptions
return the names that correcpond with numbers higher than 60
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/
function myLanguages(results) {
    return Object.keys(results).filter(v=>results[v]>=60).sort((a,b)=>results[b]-results[a])
}   // return the keys after filtering the ones that are above 60 and sorting them least to greatest
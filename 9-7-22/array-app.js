/*Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]

The websites array has already been defined for you using the following code:

var websites = [];
prep:given a variable to add to
r:return what to add to a function to make websites = codewars
*/
websites.push('codewars') //push method to add to the array

/*Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
prep
p:given an array of strings
r:return the array as 1 string with appropriate spaces
e:['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/
function smash (words) {
    return words.join(' ') //use join method to bring array together to a string and have a space in the parenthesis so theres paces in the string
 };
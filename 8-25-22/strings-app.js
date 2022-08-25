/*Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.
prep
p:given a string of words
r:return true if all elements are uppercase and false if not
e:"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/
String.prototype.isUpperCase = function() {
    return this.toString() == this.toUpperCase()
    } //return if the string given matches the given string in all upper case
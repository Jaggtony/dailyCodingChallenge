/*
Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".
prep
p:given an array of numbers and letters. can be empty, contians numbers and letters, no negstives
r:return the phone number within the given string if there is one. of there isnt state not a number
e:
)0207ERGQREG88349F82!efRF)"), 
"02078834982"sjfniebienvr12312312312ehfWh"), "Not a phone number"
*/
function isItANum(str) {
    str = str.replace(/\D/g,'') 
    if(str[0] == 0 && str.length == 11){
      return str
    }else{return "Not a phone number"}
  }
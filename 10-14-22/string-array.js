/*Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
prep
p:given a string always with something in it
r:return each letter shifted 10 places down in the alphabet
e:("testcase"), "docdmkco")
*/
function moveTen(s){
    var n = 26; // alphabet letters amount
      if (10 < 0) {
          return caesarCipher(s, 10 + n);
      }
  return s.split('')
          .map(function (c) {
              if (c.match(/[a-z]/i)) {
                  var code = c.charCodeAt();
                  var shift = code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
                  return String.fromCharCode(((code - shift + 10) % n) + shift);
              }
              return c;
          }).join('');
    }
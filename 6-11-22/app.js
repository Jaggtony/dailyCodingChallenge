/*Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) 
that will insert dashes ('-') between each two odd digits in num. 

prep
p:always non negative number
r:return og array with dash between off numbers
e:454793 the output should be 4547-9-3

*/
function insertDash(num) {

  num = num.toString().split('') //make array a string and split it
   
   for(let i = 0; i < num.length; i++){ //loops
     if (num[i]%2 > 0 && num[i +1]%2 > 0){ //if both items modulus 2 doesnt equal 0
       num[i] = num[i] + '-' //if they do add the -
     }
   }
  
   return num.join('')  //join it all bak together and return
   
 }
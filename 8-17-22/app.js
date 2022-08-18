/*Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
prep
p:given a string of a, b, and/ or c
r:swap all the a to b and all the b to a
e:'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/
function switcheroo(x){
    x = x.split('') //turn the string into an array
    for ( let i =0 ; i<x.length; i++){ //make a looop for the array 
     if (x[i] == 'a'){ //condition to change a to b
       x[i]='b'
     } else if (x[i] == 'b'){ //condition to change b to a 
       x[i]='a'
    }
    }return x.join('') //return the swapped for joined back into a string
    }
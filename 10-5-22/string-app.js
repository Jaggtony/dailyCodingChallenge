/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
prep
p:given a string of letters. always going to be a variation of ATCG of different lengths
r:return the string back after waspping all A to T and reverse and G to C and reverse
e:"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/
function DNAStrand(dna){
    let arr = [] //set up new array to push to 
    for(let i =0 ; i<dna.length;i++){ //loop through dna array
      if(dna[i]=='A'){ //conditions to sawp letters
        arr.push('T')
      }else if(dna[i]=='T'){
        arr.push('A')
      }else if(dna[i]=='G'){
        arr.push('C')
      }else if(dna[i]=='C'){
        arr.push('G')
      }
    }return arr.join('') //return the array joined back into a string
  }
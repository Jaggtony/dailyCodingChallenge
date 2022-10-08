/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.
prep
p:given a string that represents dna. will always be a variation of 'GCAT'
r:return the dna after replacing all the 't' with 'u' and vise versa as a string
e:DNAtoRNA("GCAT"), "GCAU"
*/
function DNAtoRNA(dna) {
    let arr=[] //array to add to so not to adjust given string
    for (let i=0; i<dna.length;i++){ //loop through each item
      if(dna[i]=='T'){ //conditions to replace letters
        arr.push('U')
      }else if(dna[i]=='U'){
        arr.push('T')
      }else{arr.push(dna[i])} //the catch alll to push everything else
    }return arr.join('') //join in return because it wants a string not array
  }
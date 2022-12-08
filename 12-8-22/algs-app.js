/*given a string of characters, return the character that apperars the most often. 

describe("Max Character", ()=> {
    it("should return max character", ()=>{
        asserrt.equal(max("hello world!"), "l");
    })
})
*/
function maxCharacter(str){
    let charMap = {}
    let count = 0
    let maxChar = null
    for(const char of str){
        charMap[char] = charMap[char]+ 1 || 1
    }
    for (const char in charMap){
        if(charMap[char] > count){
            count = charMap[char]
            maxChar = char 
        }
    }return maxChar
}
//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(fightStyle, playerHeight, playerWeight, bigMove){
    this.style=fightStyle;
    this.height=playerHeight;
    this.weight=playerWeight;
    this.move=bigMove;

    this.voiceLine = function(){
        alert("highghhhhghghgh")
    }
    this.taunt = function(){
        console.log('boooo')
    }
    this.intro = function(){
        return 'this isnt important'
    }
}
let jagg = new StreetFighter('kicks', '5ft', '155lb', 'dragon smash')

StreetFighter.prototype.isCool=true
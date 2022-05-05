//Complete the following program to add the definition of the Dog class.
//
//Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here
class Dog{
    constructor(name, species, size){
        this.name=name;
        this.species=species;
        this.size=size;
        this.bark = 'Woof! Woof!'
    }
  }
const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark}`);


//Character inventory
//Improve the example RPG to add character inventory management according to the following rules:
//
//A character's inventory contains a number of gold and a number of keys.
//
//Each character begins with 10 gold and 1 key.
//
//The character description must show the inventory state.
//
//When a character slays another character, the victim's inventory goes to its vanquisher.
//
//Here's the expected execution result.

class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.gold=10
      this.key=1
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`);
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          this.gold+=target.gold;
          target.gold 
          console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`);
          this.xp += bonusXP;
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points, ${this.gold}gold 
      and ${this.key}key(s)`;
    }
  }
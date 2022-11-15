// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        return // Tell me, do you bleed...? You Will...
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
       super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`; // the Viking alive: Ugh, is that really all you can do?
        } else { 
            return `${this.name} has died in act of combat`; // the Viking dies: I can see the Valhalla 
        }  
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {

    }
    saxonAttack() {

    }
    showStatus() {
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";  
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}

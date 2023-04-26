export class Bowerman {
	constructor() {
		this.helth = 100;
		this.type = "Bowerman";
		this.attack = 25;
		this.defence = 35;
	}
}

export class Magician {
	constructor() {
		this.helth = 100;
		this.type = "Magician";
		this.attack = 10;
		this.defence = 40;
	}
}

export class King {
	constructor() {
		this.helth = 100;
		this.type = "King";
		this.attack = 30;
		this.defence = 35;
	}
}


export class Team {
  #booleans = false;

	constructor() {
		this.members = new Set();
		// this.heroes = {};
		// this.i = 0;
	}

	add(hero) {
    // checking 'members'. Thy has the object name the hero or no
    this.members.size === 0 ? this.members.add(hero) : this.members.forEach(item => {
      item.type.toLowerCase() === hero.type.toLowerCase() ? this.#booleans = true :
        this.#newThrow(item);
    });
    this.#booleans ? null : this.members.add(hero);
    this.#booleans = false;
    const sizes = Array.from(this.members).length;
    return sizes;
	}

  addAll(...heros) {
    // got a heros list and checking  the name members list to has or not has doubles.
    heros.forEach(hero => {
      this.members.forEach(item => {
        item.type.toLowerCase() === hero.type.toLowerCase() ? this.#booleans = true :
          this.#newThrow(item);
      });
      this.#booleans ? null : this.members.add(hero);
      this.#booleans = false;
    });
    const sizes = Array.from(this.members).length;
    return sizes;
	}

	toArray() {
    const arrayMembers = Array.from(this.members);
    return arrayMembers;
	}

	#newThrow(obj) {
		console.error(`Данный "${obj.type}" уже имеется в списке. `);
	}
}


// const team = new Team();
// const bowerman = new Bowerman();
// const bowerman2 = new Bowerman();
// const king = new King();
// const king2 = new King();
// const magician = new Magician();

// team.add(bowerman);
// team.add(bowerman2);
// team.add(king);
// team.add(king2);

// console.log(team.members);
// console.log(team.members.size);

// team.addAll(bowerman, bowerman2, king, king2, magician, king2);
// console.log(team.members);
// console.log(team.members.size);

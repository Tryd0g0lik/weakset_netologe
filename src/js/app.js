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
	constructor() {
    this.members = new Set();
	}

  add(hero) {
    try {
      this.members.add(hero);
    } catch (e) {
      this.#newThrow(e);
    }
	}

  addAll(...heros) {
    heros.filter(item => {
      try {
        this.members.add(item);
      } catch (e) {
        this.#newThrow(e);
      }
    });
    return this.members.size;
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
// team.add(king);

// console.log(team.members);
// console.log(team.members.size);

// team.addAll(bowerman, bowerman2, king, king2, magician, king2);
// console.log(team.members);
// console.log(team.members.size);

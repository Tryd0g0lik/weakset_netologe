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
		// this.heroes = {};
		// this.i = 0;
	}

	add(hero) {
		if (this.members.size === 0) {
			this.members.add(hero);
		} else {
			let i = -this.members.size; // счётчик
			const sets = Array.from(this.members);
			sets.shift();
			sets.forEach(value => { value.type === hero.type ? null : i += 1; });
			i === 0 ? this.members.add(hero) : this.#newThrow(hero);
		}
	}

	addAll(...heros) {
		this.members.size === 0 ? this.members.add(heros[0][0]) : null;
		heros[0].shift();

		heros[0].filter(item => {
			let i = -this.members.size;
			const sets = this.members;


			sets.forEach(value => { value.type === item.type ? this.#newThrow(value) : i += 1; });
			i === 0 ? this.members.add(item) : null;
		});
	}

	toArray() {
		const arrayMembers = Array.from(this.members);
		console.log(arrayMembers);
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

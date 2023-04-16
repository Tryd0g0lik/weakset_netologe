class Bowerman {
	constructor() {
		this.helth = 100;
		this.type = "Bowerman";
		this.attack = 25;
		this.defence = 35;
	}
}
class Magician {
	constructor() {
		this.helth = 100;
		this.type = "Magician";
		this.attack = 10;
		this.defence = 40;
	}
}

class King {
	constructor() {
		this.helth = 100;
		this.type = "King";
		this.attack = 30;
		this.defence = 35;
	}
}


class Team {
	constructor() {
		this.members = new Set();
		this.heroes = {};
		this.i = 0;
	}

	add(hero) {
		const heroes = this.members;
		function newThrow() {
			console.error(`Данный "${hero.type}" уже имеется в списке. `);

		}
		let number;
		this.members.size === 0 ? this.members.add(hero) : change(hero, this.members).then((numb) => {
			numb === 0 ? this.members.add(hero) : newThrow();
			console.log(this.members);
		});

		async function change(obj, set) {
			let i = -set.size;
			console.log(i)
			await set.forEach(Promise((value) => {
				return value
			})()).then(() => {
				console.log(i + " ===> " + value.type + " ===> " + obj.type);
				value.type === obj.type ? null : i += 1
			}
			);
			return await i

		}

	}

	addAll(...heros) {


	}

	toArray() {

	}
}

const team = new Team();
const bowerman = new Bowerman();
const magician = new Magician();
const king = new King()
const magician2 = new Magician();
const king2 = new King()
// const bowerman2 = new Bowerman();
team.add(bowerman)
team.add(magician)
team.add(king)
team.add(king2)
// team.add(magician2)
// team.add(king2)
// team.add(king)
// team.add(magician)
// console.log("team: ", team.members)
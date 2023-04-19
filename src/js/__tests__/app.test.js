import { Team, Bowerman, King, Magician } from "../app";


const bowerman = new Bowerman();

const bowerman2 = new Bowerman();
const king = new King();
const magician = new Magician();

test(`in-row: => 002 =>`, () => {
	const team = new Team();
	const set = new Set();

	team.add(bowerman);
	team.add(bowerman2);
	team.add(king);

	set.add(bowerman);
	set.add(king);


	expect(team.members.size).toBe(set.size);
	team.members.clear();
});

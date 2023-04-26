import {
  Team, Bowerman, King, Magician,
} from "../app";


const bowerman = new Bowerman();
const bowerman2 = new Bowerman();
const king = new King();
const magician = new Magician();

describe("Start test ADD-def =>:", () => {
  const team = new Team();

  const tests = test.each([
    ["№: 001", [bowerman], 1],
    ["№: 002", [bowerman, bowerman], 1],
    ["№: 003", [bowerman, bowerman, bowerman2], 1],
    ["№: 004", [bowerman, bowerman, bowerman2, king], 2],
    ["№: 004", [bowerman, bowerman, bowerman2, king, magician], 3],
  ]);

  tests("Testing Def =>: %s ", (a, b, expected) => {
    let result = 0;
    b.forEach(item => {
      result = team.add(item);
    });
    expect(result).toBe(expected);
  });
});

describe("Start test ADDALL-def =>:", () => {
  const team2 = new Team();

  const tests = test.each([
    ["№: 001", team2.addAll(bowerman), 1],
    ["№: 002", team2.addAll(bowerman, bowerman), 1],
    ["№: 003", team2.addAll(bowerman, bowerman, bowerman2), 1],
    ["№: 004", team2.addAll(bowerman, bowerman, bowerman2, king), 2],
    ["№: 004", team2.addAll(bowerman, bowerman, bowerman2, king, magician), 3],
  ]);

  tests("Testing Def =>: %s ", (a, b, expected) => {
    expect(b).toBe(expected);
  });
});

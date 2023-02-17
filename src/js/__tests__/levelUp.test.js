import Bowerman from '../bowerman';

test('test levelUp method', () => {
  const person = new Bowerman('Frodo', 'Bowerman');
  person.levelUp();
  const result = {
    _name: 'Frodo',
    _type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  expect(person).toEqual(result);
});

test('test levelUp error', () => {
  const person = new Bowerman('Frodo', 'Bowerman');
  person.damage(133);
  function error() {
    person.levelUp();
    return person;
  }

  expect(error).toThrow(Error);
});

import Bowerman from '../bowerman';

test('test damage method', () => {
  const person = new Bowerman('Frodo', 'Bowerman');
  person.damage(100);
  const result = {
    _name: 'Frodo',
    _type: 'Bowerman',
    health: 25,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(person).toEqual(result);
});

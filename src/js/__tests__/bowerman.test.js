import Bowerman from '../bowerman';

test('test Bowerman class', () => {
  const result = {
    _name: 'Frodo',
    _type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(new Bowerman('Frodo', 'Swordsman')).toEqual(result);
});

import Bowerman from '../bowerman';

test('test Bowerman class', () => {
  const result = {
    _name: 'Frodo',
    _type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(new Bowerman('Frodo', 'Bowerman')).toEqual(result);
});

import Undead from '../undead';

test('test Undead class', () => {
  const result = {
    _name: 'Frodo',
    _type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(new Undead('Frodo', 'Undead')).toEqual(result);
});

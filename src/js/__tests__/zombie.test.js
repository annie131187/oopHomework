import Zombie from '../zombie';

test('test Zombie class', () => {
  const result = {
    _name: 'Frodo',
    _type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(new Zombie('Frodo', 'Zombie')).toEqual(result);
});

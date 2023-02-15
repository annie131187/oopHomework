import Zombie from '../zombie';

test('test Zombie class', () => {
  const result = {
    _name: 'Frodo',
    _type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(new Zombie('Frodo', 'Swordsman')).toEqual(result);
});

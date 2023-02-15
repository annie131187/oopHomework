import Swordsman from '../swordsman';

test('test Swordsman class', () => {
  const result = {
    _name: 'Frodo',
    _type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(new Swordsman('Frodo', 'Swordsman')).toEqual(result);
});

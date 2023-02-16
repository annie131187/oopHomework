import Magician from '../magician';

test('test Magician class', () => {
  const result = {
    _name: 'Frodo',
    _type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(new Magician('Frodo', 'Magician')).toEqual(result);
});

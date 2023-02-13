import Character from '../character';

test('test Character class', () => {
  const result = {
    _name: 'Frodo',
    _type: 'Swordsman',
    health: 100,
    level: 1,
  };

  expect(new Character('Frodo', 'Swordsman')).toEqual(result);
});

test('test Error short name', () => {
  expect(() => { Character('F', 'Swordsman'); }).toThrow(Error);
});

test('test Error short name', () => {
  expect(() => { Character('Frodothemaster', 'Swordsman'); }).toThrow(Error);
});

test('test Error short name', () => {
  expect(() => { Character('Frodo', 'King'); }).toThrow(Error);
});

import Daemon from '../daemon';

test('test Daemon class', () => {
  const result = {
    _name: 'Frodo',
    _type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(new Daemon('Frodo', 'Daemon')).toEqual(result);
});

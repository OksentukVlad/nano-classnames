var cn = require('./index.js');

test('Object with only true values', () => {
  var result = cn({
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true
  });

  expect(result).toBe('f e d c b a');
});

test('Object with only false values', () => {
  var result = cn({
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false
  });

  expect(result).toBe('');
});

test('Object with values of different types', () => {
  var result = cn({
    a: true,
    b: false,
    c: 0,
    d: null,
    e: undefined,
    f: 1
  });

  expect(result).toBe('f a');
});

test('Empty object as parameter', () => {
  var result = cn({});

  expect(result).toBe('');
});

test('Empty array as parameter', () => {
  var result = cn([]);

  expect(result).toBe('');
});

test('String as parameter', () => {
  var result = cn('string');

  expect(result).toBe('5 4 3 2 1 0');
});

test('Number as parameter', () => {
  var result = cn(123456);

  expect(result).toBe('');
});

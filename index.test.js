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

  expect(result).toBe('a b c d e f');
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
    f: 1,
    g: '',
    h: '1'
  });

  expect(result).toBe('a f h');
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

  expect(result).toBe('0 1 2 3 4 5');
});

test('Number as parameter', () => {
  var result = cn(123456);

  expect(result).toBe('');
});

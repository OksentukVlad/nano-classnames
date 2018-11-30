var cn = require('./index.js');

test('00', () => {
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

test('01', () => {
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

test('02', () => {
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

test('03', () => {
  var result = cn({});

  expect(result).toBe('');
});

test('04', () => {
  var result = cn([]);

  expect(result).toBe('');
});

test('05', () => {
  var result = cn('string');

  expect(result).toBe('5 4 3 2 1 0');
});

test('06', () => {
  var result = cn(123456);

  expect(result).toBe('');
});

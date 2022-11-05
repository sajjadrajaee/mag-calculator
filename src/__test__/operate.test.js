import operate from '../logic/operate';

test('sum', () => {
  expect(operate(1, 9, '+')).toBe('10');
});
test('min', () => {
  expect(operate(10, 9, '-')).toBe('1');
});
test('multiply', () => {
  expect(operate(4, 5, 'x')).toBe('20');
});
test('divide', () => {
  expect(operate(4, 2, '÷')).toBe('2');
});
test('mod', () => {
  expect(operate(9, 3, '%')).toBe('0');
});
// Throw Error
test('divide that throw error', () => {
  expect(() => operate(9, 0, ';')).toThrow(Error);
});
// divided by zero
test('divided by zero', () => {
  expect(operate(9, 0, '÷')).toBe("Can't divide by 0.");
});

import {calculateAverage} from './NumericDetail';

describe('calculateAverage', () => {
  test('Test with same number', () => {
    expect(calculateAverage([10, 10, 10])).toEqual('10.00');
  });
  test('Test with different numbers', () => {
    expect(calculateAverage([1, 10, 20, 40])).toEqual('17.75');
  });
  test('Test with negative numbers', () => {
    expect(calculateAverage([-1, -10, -20, -40])).toEqual('-17.75');
  });
  test('Test with decimal numbers', () => {
    expect(calculateAverage([1.28, 89.144, 141.513101, 511141, 12177])).toEqual(
      '104709.99',
    );
  });
  test('Test with an array of string', () => {
    expect(calculateAverage(['lorem', 'ipsum'])).toEqual(
      'Error in the answers',
    );
  });
  test('Test with an array of array of boolean', () => {
    expect(
      calculateAverage([
        [true, false],
        [false, false],
      ]),
    ).toEqual('Error in the answers');
  });
});

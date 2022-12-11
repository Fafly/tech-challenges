import {formatAnswers} from './MCQDetail';

describe('formatAnswers', () => {
  test('Test with 3 products full true', () => {
    expect(
      formatAnswers(
        [
          [true, true, true],
          [true, true, true],
          [true, true, true],
        ],
        ['1', '2', '3'],
      ),
    ).toEqual(['1: 3 times', '2: 3 times', '3: 3 times']);
  });
  test('Test with 3 products full false', () => {
    expect(
      formatAnswers(
        [
          [false, false, false],
          [false, false, false],
          [false, false, false],
        ],
        ['1', '2', '3'],
      ),
    ).toEqual(['1: 0 times', '2: 0 times', '3: 0 times']);
  });
  test('Test with 3 products for 1: 1, 2: 3, 3: 0, 4: 2, 5: 1, 6: 1, 7: 2, 8: 2', () => {
    expect(
      formatAnswers(
        [
          [false, true, false, true, true, false, true, false],
          [true, true, false, false, false, false, true, true],
          [false, true, false, true, false, true, false, true],
        ],
        ['1', '2', '3', '4', '5', '6', '7', '8'],
      ),
    ).toEqual([
      '1: 1 times',
      '2: 3 times',
      '3: 0 times',
      '4: 2 times',
      '5: 1 times',
      '6: 1 times',
      '7: 2 times',
      '8: 2 times',
    ]);
  });
  test('Test with an array of string', () => {
    expect(formatAnswers(['lorem', 'ipsum'], undefined)).toEqual(
      'Error in the answers',
    );
  });
  test('Test with an array of number', () => {
    expect(formatAnswers([1, 10, 20, 40], undefined)).toEqual(
      'Error in the answers',
    );
  });
});

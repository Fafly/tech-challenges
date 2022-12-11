import {formatDate} from './DateDetail';

describe('formatDate', () => {
  test('Test with same number', () => {
    expect(
      formatDate(['2017-06-09T10:10:00.000Z', '2020-04-29T11:00:00.000Z']),
    ).toEqual(['9/6/2017', '29/4/2020']);
  });
  test('Test with an array of number', () => {
    expect(formatDate([1, 2])).toEqual('Error in the answers');
  });
  test('Test with an array of array of boolean', () => {
    expect(
      formatDate([
        [true, false],
        [false, false],
      ]),
    ).toEqual('Error in the answers');
  });
});

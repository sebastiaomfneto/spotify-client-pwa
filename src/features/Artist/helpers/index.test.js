import { buildPopularity } from './';

const generateRange = (start, end) =>
  Array.from(Array(end - start + 1).fill(0)).map((_i, index) => start + index);

describe('testing buildPopularity', () => {
  test('should return "Hot"', () => {
    generateRange(80, 100).forEach((value) => {
      expect(buildPopularity(value)).toEqual('Hot');
    });
  });
  test('should return "Cool"', () => {
    generateRange(60, 79).forEach((value) => {
      expect(buildPopularity(value)).toEqual('Cool');
    });
  });
  test('should return "Regular"', () => {
    generateRange(30, 59).forEach((value) => {
      expect(buildPopularity(value)).toEqual('Regular');
    });
  });
  test('should return "Underground"', () => {
    generateRange(0, 29).forEach((value) => {
      expect(buildPopularity(value)).toEqual('Underground');
    });
  });
});

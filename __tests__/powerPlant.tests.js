import { changeState } from '../src/js/plant.js';

describe('changeState', () => {
  test('should verify data type', () => {
    const plant = {}
    const prop = "soil";
    const value = 1;
    expect(changeState(prop)(value)(plant)).toEqual({"soil" : 1});
  })
})

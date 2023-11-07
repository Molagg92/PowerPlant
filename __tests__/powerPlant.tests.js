import { plant } from '../src/js/plant.js';

describe('changeState', () => {
  test('should verify data type', () => {
    const plant = {};
    expect(plant).toBe({"soil" : 1});
  })
})
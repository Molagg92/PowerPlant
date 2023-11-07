import { changeState } from '../src/js/plant.js';

describe('changeState', () => {
  test('should verify data type', () => {
    // const plant = {}
    // changeState("soil");
    expect(changeState("soil")).toBe({"soil" : 1});
  })
})

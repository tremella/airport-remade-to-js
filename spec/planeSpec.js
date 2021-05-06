'use strict';

describe('Plane', () => {
  let plane;

  beforeEach(() => {
    plane = new Plane();
  })

  it('should have a valid id', () => {
    expect(plane.id).toBeGreaterThan(12000)
    expect(plane.id).toBeLessThan(122000)
  });
});

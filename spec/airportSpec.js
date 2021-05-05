'use strict';

describe('Airport', () => {
  let airport;
  let plane;
  beforeEach(() => {
    airport = new Airport();
    plane = new Plane();
  });

  it('should be empty before landing', () => {
    expect(airport.hangar).toEqual([])
  });

  it('allows a plane to land', () => {
    airport.land(plane)
    expect(airport.hangar).toContain(plane);
  });
});

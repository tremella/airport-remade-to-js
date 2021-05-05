'use strict';

describe('Airport', () => {
  let airport = new Airport;
  let plane = new Plane;

  // it('should be empty before landing', () => {
  //   expect(hangar).toBe
  // });

  it('allows a plane to land', () => {
    airport.land(plane)
    expect(airport.hangar).toContain(plane);
  });
});

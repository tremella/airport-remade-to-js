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

  it('launches plane, becomes empty',()=>{
    airport.land(plane)
    airport.launch(plane)
    expect(airport.hangar).not.toContain(plane)
  });

  it('raises ERR if a landing would exceed capacity (of 1)',()=>{
    airport.land(new Plane())
    expect( function() { airport.land(plane); } ).toThrow(new Error("airport full"));
  });

  it('recognises the isStormy attribute', () => {
    let a2 = new Airport(1,true)
    let a3 = new Airport(1,false)
    expect(a2.isStormy).toEqual(true)
    expect(a3.isStormy).toEqual(false)
  });

});

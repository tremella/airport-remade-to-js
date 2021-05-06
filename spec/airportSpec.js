'use strict';

describe('Airport', () => {
  let stormyAirport;
  let niceAirport;
  let plane;
  beforeEach(() => {
    stormyAirport = new Airport(1,true);
    niceAirport = new Airport(1,false);
    plane = new Plane();
  });

  it('should be empty before landing', () => {
    expect(niceAirport.hangar).toEqual([])
  });

  it('allows a plane to land', () => {
    niceAirport.land(plane)
    expect(niceAirport.hangar).toContain(plane);
  });

  it('launches plane, becomes empty',()=>{
    niceAirport.land(plane)
    niceAirport.launch(plane)
    expect(niceAirport.hangar).not.toContain(plane)
  });

  it('raises ERR if a landing would exceed capacity (of 1)',()=>{
    niceAirport.land(new Plane())
    expect( function() { niceAirport.land(plane); } ).toThrow(new Error("airport full"));
  });

  it('recognises the isStormy attribute', () => {
    expect(stormyAirport.isStormy).toEqual(true)
    expect(niceAirport.isStormy).toEqual(false)
  });

  it('prevents a launch if isStormy is true', () => {
    expect( function() { stormyAirport.launch(plane); } ).toThrow(new Error("too dangerous to launch"));
  })

  it('prevents a landing if isStormy is true', () => {
    expect( function() { stormyAirport.land(plane); } ).toThrow(new Error("too dangerous to land"));
  })

});

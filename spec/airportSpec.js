'use strict';

describe('Airport', () => {
  // let weather;
  let airport;
  let plane;

  beforeEach(() => {
    // weather = new Weather();
    airport = new Airport(1);
    plane = new Plane();
  });

  it('should be empty before landing', () => {
    expect(airport.hangar).toEqual([])
  });

  it('allows a plane to land', () => {
    spyOn(airport.weather, 'isStormy').and.returnValue(false)

    // spyOn(weather, 'isStormy').and.returnValue(false)
    // we could equally spyOn the Weather class instance, instead of
    // it as an attribute of Airport. this might be good in cases
    // where attributes are private, but classes are not.
    airport.land(plane)
    expect(airport.hangar).toContain(plane);
  });

  it('launches plane, becomes empty',()=>{
    spyOn(airport.weather, 'isStormy').and.returnValue(false)
    airport.land(plane)
    airport.launch(plane)
    expect(airport.hangar).not.toContain(plane)
  });

  it('raises ERR if a landing would exceed capacity (of 1)',()=>{
    spyOn(airport.weather, 'isStormy').and.returnValue(false)
    airport.land(new Plane())
    expect( function() { airport.land(plane); } ).toThrow(new Error("airport full"));
  });

  it('recognises the weather attribute', () => {
    spyOn(airport.weather, 'isStormy').and.returnValue(true)
    expect(airport.weather.isStormy()).toEqual(true)
  });

  it('prevents a launch if bad weather is true', () => {
    spyOn(airport.weather, 'isStormy').and.returnValue(true)
    expect( function() { airport.launch(plane) } ).toThrow(new Error("too dangerous to launch"));
  })

  it('prevents a landing if bad weather is true', () => {
    spyOn(airport.weather, 'isStormy').and.returnValue(true)
    expect( function() { airport.land(plane) } ).toThrow(new Error("too dangerous to land"));
  })

});

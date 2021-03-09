'use strict';

describe ('Thermostat', function() {
  var thermostat; 
  
  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it('starts at 20 degrees temperature', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);

  })
  
  
})


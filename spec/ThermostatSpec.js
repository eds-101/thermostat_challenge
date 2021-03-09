'use strict';

describe ('Thermostat', function() {
  var thermostat; 
  
  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it('starts at 20 degrees temperature', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);

  })
  
  it('drops the temperature when I select down', function() {
    thermostat.down(5)
    expect(thermostat.getCurrentTemperature()).toEqual(15);
  })

  it('increases the temperature when I select up', function() {
    thermostat.up(5)
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  })

  it('increases the temperature by 1 unless I say otherwise', function() {
    thermostat.up()
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  })
  
})


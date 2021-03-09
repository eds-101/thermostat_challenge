'use strict';

describe ('Thermostat', function() {
  let thermostat; 
  
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

  it('should have a minimum temperature of 10 degrees', function() {
    expect( function() {thermostat.down(11)} ).toThrow ('Minimum temperature is 10 degrees');
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  })
  
  it('should have a maximum temperature of 25 degrees when power saving is on', function() {
    thermostat.powerSavingOn()
    expect( function() {thermostat.up(30)} ).toThrow ('Maximum temperature is 25 degrees');
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  })

  it('should have a max temperature of 32 degrees when the power saving mode is off', function() {
    thermostat.powerSavingOff()
    thermostat.up(8)
    expect( function() {thermostat.up(8)} ).toThrow (`Maximum temperature is 32 degrees`)
  })

  it('should reset temperature to 20 degrees when reset is called', function() {
    thermostat.up(3)
    thermostat.reset() //always call functions w brackets
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })

  it('should give me information about energy usage', function() {
    expect(thermostat.energyUsage()).toEqual("medium-usage")
    thermostat.down(3) //17 
    expect(thermostat.energyUsage()).toEqual("low-usage")
    thermostat.powerSavingOff()
    thermostat.up(9) //26
    expect(thermostat.energyUsage()).toEqual("high-usage")
  })


})


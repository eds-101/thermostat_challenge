describe ('Thermostat', function() {
  it('starts at 20 degrees temperature', function() {
    var thermostat = new Thermostat();
    expect(thermostat.temperature()).toEqual(20);

  })
  
  
})


$(document).ready(function() {
  let thermostat = new Thermostat();
  updateTemperature();
  $('#powersaving-on').css('color','green');
  $('#powersaving-off').css('color','red');

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });
  
  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });
  
  $('#powersaving-on').click(function() {
    thermostat.powerSavingOn();
    $('#powersaving-on').css('color','green')
    $('#powersaving-off').css('color','red')
    $('#power-saving-status').text('on')
    updateTemperature();
  });     

  $('#powersaving-off').click(function() {
    thermostat.powerSavingOff();
    $('#powersaving-on').css('color','red')
    $('#powersaving-off').css('color','green')
    $('#power-saving-status').text('off')
    updateTemperature();
  });    
  
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
    // double check this
  };
  
})
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
  
  // double check ajax && get methodology via w3schools
  $.ajax({url: "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=996ebd3f29c7b3e3378c7e61e5174ae6", success:
 function( data ) {
    $('#london-temp').text(data.main.temp)
  }

       });
  
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
    // double check this
  };
  
})
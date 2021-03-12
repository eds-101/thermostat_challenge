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

  $('#energy-usage').click(function(event) {
    let energyUsage = thermostat.energyUsage();
    alert(energyUsage);
    event.preventDefault();
  });
  
  // double check ajax && get methodology via w3schools
  $( "#user-city-form" ).submit(function(event) {
    event.preventDefault(); 
    var userCity = $('#user-city').val();
                      $('#city-name').text(userCity);
            $.ajax( 
              {url: "http://api.openweathermap.org/data/2.5/weather?q=" + userCity + "&units=metric&appid=743f1595c5ff191c20e7a8e8ad6b865a", success:
                function( data ) 
                {
                  $('#city-temperature').text(data.main.temp)
                                                        }
              })}
                );

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
    // updates color based on output from referenced function
  };
  
})

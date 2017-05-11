var thermostat = thermostat || new Thermostat()
var string = "ON"

$.get("http://api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=35b2b723ca44019829cb5e1c2ce4e8d3", function(weather) {
  $("#weather").html('London: ' + Math.round(weather.list[0].main.temp - 273.15) + "&deg")
});

$.get("http://api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=35b2b723ca44019829cb5e1c2ce4e8d3", function(weather) {
  var weatherIcon = "http://openweathermap.org/img/w/" + (weather.list[0].weather[0].icon) + ".png";
});

$(function () {

  function resetDisplay() {
    $("#temperature").html(thermostat.temperature + "&deg")
    $("#powerSave").html("POWER-SAVE: " + string);
    $("#energyUsage").text((thermostat.checkUsage()).toUpperCase())
    $("#full-display").css('background', displayColour())
}

  $("#down").click(function() {
    thermostat.temperatureDown();
    resetDisplay();
  });

  $("#reset").click(function() {
    thermostat.resetTemperature();
    resetDisplay();
  });

  $("#power-save").click(function() {
    switchPowerSave();
    resetDisplay();
  });

    $("#up").click(function () {
      thermostat.temperatureUp();
      resetDisplay();
    });
  resetDisplay();
});

function displayColour() {
  if (thermostat.checkUsage() == 'high-usage' ) { return '#ff4039' }
  if (thermostat.checkUsage() == 'medium-usage' ) { return '#3ac7ff' }
  if (thermostat.checkUsage() == 'low-usage' ) { return '#bfffc2' }
};

function switchPowerSave() {
  if (thermostat.powerSave.isOn == true) { thermostat.powerSave.turnOff() }
  else { thermostat.powerSave.turnOn() };
  string = (thermostat.powerSave.isOn == true) ? "ON" : "OFF"
}

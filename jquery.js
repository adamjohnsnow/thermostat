var thermostat = new Thermostat()
var string = "ON"

function resetDisplay() {
  $(function() {
    $("#temperature").html(thermostat.temperature + "&deg")
    $("#powerSave").html("POWER-SAVE: " + string);
    $("#energyUsage").text((thermostat.checkUsage()).toUpperCase())
    $("#full-display").css('background', displayColour())
  });
};

resetDisplay();

function displayColour() {
  if (thermostat.checkUsage() == 'high-usage' ) { return '#ff4039' }
  if (thermostat.checkUsage() == 'medium-usage' ) { return '#3ac7ff' }
  if (thermostat.checkUsage() == 'low-usage' ) { return '#77f442' }
};

$(function() {
  $("#up").click(function() {
    thermostat.temperatureUp();
    resetDisplay();
  });
});

$(function() {
  $("#down").click(function() {
    thermostat.temperatureDown();
    resetDisplay();
  });
});

$(function() {
  $("#reset").click(function() {
    thermostat.resetTemperature();
    resetDisplay();
  });
});

$(function() {
  $("#power-save").click(function() {
    if (thermostat.powerSave.isOn == true) { thermostat.powerSave.turnOff() }
    else { thermostat.powerSave.turnOn() };
    string = (thermostat.powerSave.isOn == true) ? "ON" : "OFF"
    resetDisplay();
  });
});

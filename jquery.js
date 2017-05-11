var thermostat = new Thermostat()
$(function() {
  $("#temperature").html(thermostat.temperature + "&deg") 
  $("#powerSave").html(thermostat.powerSave.isOn)
});

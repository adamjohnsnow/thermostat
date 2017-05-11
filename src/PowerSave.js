function PowerSave() {
  this.turnOn();
}

PowerSave.ON_MAX_TEMPERATURE = 25
PowerSave.OFF_MAX_TEMPERATURE = 32

PowerSave.prototype.turnOff = function() {
  this.isOn = false;
  this.maxTemperature = PowerSave.OFF_MAX_TEMPERATURE;
}

PowerSave.prototype.turnOn = function() {
  this.isOn = true;
  this.maxTemperature = PowerSave.ON_MAX_TEMPERATURE;
}

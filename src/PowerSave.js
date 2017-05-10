function PowerSave() {
  this.turnOn();
}

PowerSave.prototype.turnOff = function() {
  this.isOn = false;
  this.maxTemperature = 32;
}

PowerSave.prototype.turnOn = function() {
  this.isOn = true;
  this.maxTemperature = 25;
}

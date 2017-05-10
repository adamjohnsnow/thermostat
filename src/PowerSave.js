function PowerSave() {
  this.isOn = true;
}

PowerSave.prototype.turnOff = function() {
  this.isOn = false;
}

PowerSave.prototype.turnOn = function() {
  this.isOn = true;
}

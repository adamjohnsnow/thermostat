function Thermostat() {
  this.resetTemperature();
  this.minTemperature = 10;
}

Thermostat.prototype.temperatureUp = function () {
  this.temperature += 1;
}

Thermostat.prototype.temperatureDown = function () {
  if ( !this._isAtMinimum()) { this.temperature -= 1 }
}

Thermostat.prototype._isAtMinimum = function () {
  return this.temperature == this.minTemperature;
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
}

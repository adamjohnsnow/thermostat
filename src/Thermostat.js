function Thermostat() {
  this.temperature = 20;
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

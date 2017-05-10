function Thermostat(powerSave = new PowerSave()) {
  this.resetTemperature();
  this.minTemperature = 10;
  this.powerSave = powerSave;
}

Thermostat.prototype.temperatureUp = function () {
  if ( !this._isAtMaximum()) { this.temperature += 1 }
}

Thermostat.prototype.temperatureDown = function () {
  if ( !this._isAtMinimum()) { this.temperature -= 1 }
}

Thermostat.prototype._isAtMinimum = function () {
  return this.temperature == this.minTemperature;
}

Thermostat.prototype._isAtMaximum = function () {
  return this.temperature == this.powerSave.maxTemperature;
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
}

Thermostat.prototype.checkUsage = function () {
  return new EnergyUsage().usageIndicator(this.temperature);
}

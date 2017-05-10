function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.temperatureUp = function () {
  this.temperature += 1
};

Thermostat.prototype.temperatureDown = function () {
  this.temperature -= 1
};

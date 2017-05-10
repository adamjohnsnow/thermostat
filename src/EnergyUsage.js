function EnergyUsage() {}

EnergyUsage.prototype.usageIndicator = function (temperature) {
  if (temperature < 18) { return 'low-usage' }
};

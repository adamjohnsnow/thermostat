function EnergyUsage() {}

EnergyUsage.prototype.usageIndicator = function (temperature) {
  if ( temperature < 18 ) { return 'low-usage' }
  if ( temperature > 24 ) { return 'high-usage' }
  return 'medium-usage'
};

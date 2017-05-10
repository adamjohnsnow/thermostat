describe('EnergyUsage', function() {

  var energyUsage = new EnergyUsage();

  describe('usage indicator', function() {
    it('returns low-usage if temperature is under 18', function() {
      expect(energyUsage.usageIndicator(17)).toEqual('low-usage');
    })
  })
})

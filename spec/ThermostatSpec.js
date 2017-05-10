describe('Thermostat', function() {
  describe('#defaultTemperature', function() {
    var thermostat = new Thermostat();

    it('has a default temperature of 20', function() {
      expect(thermostat.temperature).toEqual(20);
    })
  })
})

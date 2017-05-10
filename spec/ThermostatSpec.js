describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe('#defaultTemperature', function() {

    it('has a default temperature of 20', function() {
      expect(thermostat.temperature).toEqual(20);
    })
  })

  describe('#temperatureUp', function() {

    it('goes up by one degree', function() {
      thermostat.temperatureUp();
      expect(thermostat.temperature).toEqual(21);
    })
  })

  describe('#temperatureDown', function() {

    it('goes down by one degree', function() {
      thermostat.temperatureDown();
      expect(thermostat.temperature).toEqual(19);
    })
  })
})
describe('Thermostat', function() {

  var thermostat;
  var fakePowerSave;

  beforeEach(function() {
    fakePowerSave = {isOn: true, maxTemperature: 25}
    thermostat = new Thermostat(fakePowerSave);
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

    it('cannot go above max temperature', function() {
      thermostat.temperature = 25;
      thermostat.temperatureUp();
      expect(thermostat.temperature).toEqual(25);
    })
  })

  describe('#temperatureDown', function() {

    it('goes down by one degree', function() {
      thermostat.temperatureDown();
      expect(thermostat.temperature).toEqual(19);
    })

    it('cannot go below min temperature', function() {
      thermostat.temperature = 10;
      thermostat.temperatureDown();
      expect(thermostat.temperature).toEqual(10);
    })
  })

  describe('#minTemp', function() {

    it('has a default min temperature of 10', function() {
      expect(thermostat.minTemperature).toEqual(10);
    })
  })

  describe('#resetTemperature', function() {

    it('resets temperature to 20', function() {
      thermostat.temperature = 10;
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    })

  })
})

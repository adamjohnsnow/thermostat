describe('Feature Test', function() {
  var thermostat = new Thermostat();

  it('starts with medium-usage', function() {
    expect(thermostat.checkUsage()).toEqual('medium-usage');
  })

  it('cannot turn the temperature past 25', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.temperatureUp();
    }
    expect(thermostat.temperature).toEqual(25);
  })

  it('can turn powerSave off', function() {
    thermostat.powerSave.turnOff();
    expect(thermostat.powerSave.isOn).toEqual(false);
  })

  it('can turn the temperature past 25 when powerSave is off', function() {
    thermostat.temperatureUp();
    expect(thermostat.temperature).toEqual(26);
  })

  it('has high-usage', function() {
    expect(thermostat.checkUsage()).toEqual('high-usage');
  })
})

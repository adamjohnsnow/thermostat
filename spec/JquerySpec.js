describe('jQuery', function() {
  var thermostat = {
    temperature: 99,
    checkUsage: 'medium-usage',
    powerSave: { isOn: true },
  };

  var button = $("input#power-save")

  console.log(button)
  it('starts with blue colour', function() {
    expect(displayColour()).toEqual('#3ac7ff')
  })

})

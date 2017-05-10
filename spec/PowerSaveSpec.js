describe('PowerSave', function() {
  var powerSave

  beforeEach(function() {
    powerSave = new PowerSave();
  })

  describe('default status', function() {
    it('has a default powersave status of On', function() {
      expect(powerSave.isOn).toEqual(true);
    })
  })

  describe('turning off', function() {
    it('can be turned off', function() {
      powerSave.turnOff();
      expect(powerSave.isOn).toEqual(false);
    })
  })

  describe('turning on', function() {
    it('can be turned on', function() {
      powerSave.isOn = false;
      powerSave.turnOn();
      expect(powerSave.isOn).toEqual(true);
    })
  })
})

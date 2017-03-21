var power = require('../js/test.js');

describe("A suite is just a function", function() {
  

  it("5^5", function() {
   
    expect(power.pow(5, 5)).toBe(3125);
  })

  it("3^3", function() {
   
    expect(power.pow(3, 3)).toBe(27);
  })

});



const assert = require("assert");

const fuelCounterUpper = require("../fuelCounterUpper");

describe("Fuel Counter-Upper", () => {
  it("calculates the correct amount of fuel based on the mass input", () => {
    const expectedValue = 2;
    const actualValue = fuelCounterUpper.calculateFuel(12);
    assert.strictEqual(expectedValue, actualValue);
  });

  it("calculates the correct rounded amount of fuel based on the mass input", () => {
    const expectedValue = 2;
    const actualValue = fuelCounterUpper.calculateFuel(14);
    assert.strictEqual(expectedValue, actualValue);
  });

  it("take an input file and calculates the total amount of fuel needed", async () => {
    const expectedTotalMass = 8;
    const actualTotalMass = await fuelCounterUpper.calculateTotalFuel(
      "test/fixtures/massList.txt"
    );
    assert.strictEqual(expectedTotalMass, actualTotalMass);
  });
});

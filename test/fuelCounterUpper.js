const assert = require("assert");

const fuelCounterUpper = require("../src/fuelCounterUpper");

describe("Fuel Counter-Upper", () => {
  describe("Day 1 Part 1", () => {
    it("calculates the correct amount of fuel based on the mass input", () => {
      const expectedValue = 2;
      const actualValue = fuelCounterUpper.calculateFuel(12);
      assert.strictEqual(actualValue, expectedValue);
    });

    it("calculates the correct rounded amount of fuel based on the mass input", () => {
      const expectedValue = 2;
      const actualValue = fuelCounterUpper.calculateFuel(14);
      assert.strictEqual(actualValue, expectedValue);
    });

    it("take an input file and calculates the total amount of fuel needed", async () => {
      const expectedTotalFuel = 8;
      const actualTotalFuel = await fuelCounterUpper.calculateSumOfFuel(
        "test/fixtures/massList.txt"
      );
      assert.strictEqual(actualTotalFuel, expectedTotalFuel);
    });
  });

  describe("Day 1 Part 2", () => {
    it("does not return negative numbers", () => {
      const expectedValue = 0;
      const actualValue = fuelCounterUpper.calculateFuel(1);
      assert.strictEqual(actualValue, expectedValue);
    });

    it("correctly calculates the amount of fuel for the fuel", async () => {
      const expectedTotalFuel = 180564;
      const actualTotalFuel = await fuelCounterUpper.calculateSumOfFuelForFuel(
        "test/fixtures/massListHigherNumbers.txt"
      );
      assert.strictEqual(actualTotalFuel, expectedTotalFuel);
    });
  });
});

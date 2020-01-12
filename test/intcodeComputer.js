const assert = require("assert");

const intcodeComputer = require("../src/intcodeComputer");

describe("Intcode Computer", () => {
  it.only("processes input 1 (addition) correctly", () => {
    const expectedOutput = [1, 3, 0, 2, 99];
    const actualOutput = intcodeComputer.runProgramme(
      "test/fixtures/intcodeListInput1.txt"
    );
    assert.strictEqual(actualOutput, expectedOutput);;
  });
});

const assert = require("assert");

const intcodeComputer = require("../src/intcodeComputer");

describe("Intcode Computer", () => {
  it("processes input 1 (addition) correctly", () => {
    const expectedOutput = [2, 0, 0, 0, 99];
    const actualOutput = intcodeComputer.runProgramme(
      "test/fixtures/intcodeListInput1.txt"
    );
    assert.deepStrictEqual(actualOutput, expectedOutput);
  });

  it("stops when a 99 value is reached", () => {
    const expectedOutput = [2, 0, 0, 0, 99, 1, 0, 0, 0, 99];
    const actualOutput = intcodeComputer.runProgramme(
      "test/fixtures/intcodeListInputWithStop.txt"
    );
    assert.deepStrictEqual(actualOutput, expectedOutput);
  });

  it.only("processes input 2 (multiplication) correctly", () => {
    const expectedOutput = [2, 3, 0, 6, 99];
    const actualOutput = intcodeComputer.runProgramme(
      "test/fixtures/intcodeListInput2.txt"
    );
    assert.deepStrictEqual(actualOutput, expectedOutput);
  });
});

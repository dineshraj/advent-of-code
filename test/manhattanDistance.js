const assert = require("assert");

const manhattanDistance = require("../src/manhattanDistance");

describe("Manhattan Distance", () => {
  describe.only("Part 1", () => {
    it("makes an array of all points for a wire", () => {
      const wire = ["R3", "U2", "L1", "D1"];
      const expectedOutput = [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [3, 1],
        [3, 2],
        [2, 2],
        [2, 1]
      ];
      const actualOutput = manhattanDistance.calculateWirePoints(wire);
      assert.deepStrictEqual(actualOutput, expectedOutput);
    });
    it("filters two arrays to their common coordinates", () => {
      const wire1 = [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [3, 1]
      ];
      const wire2 = [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 3],
        [2, 3],
        [3, 3],
        [3, 2],
        [3, 1]
      ];
      const expectedOutput = [[3, 1]];
      const actualOutput = manhattanDistance.filterCommonValues(wire1, wire2);
      assert.deepStrictEqual(actualOutput, expectedOutput);
    });
    it.only("filters two arrays to their common coordinates with 0 values", () => {
      const wire1 = [
        [0, 0],
        [0, 1],
        [1, 0],
        [2, 0],
        [3, 0],
        [3, 1]
      ];
      const wire2 = [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 3],
        [2, 3],
        [3, 3],
        [3, 2],
        [3, 1]
      ];
      const expectedOutput = [
        [0, 1],
        [3, 1]
      ];
      const actualOutput = manhattanDistance.filterCommonValues(wire1, wire2);
      assert.deepStrictEqual(actualOutput, expectedOutput);
    });
    it("calculates the closest point to the origin and returns the distance", () => {
      const commonPoints = [
        [3, 1],
        [4, 3],
        [1, 2]
      ];
      const expectedOutput = 3;
      const actualOutput = manhattanDistance.calculateDistance(commonPoints);
      assert.strictEqual(actualOutput, expectedOutput);
    });
    it("calculates the closest point to the origin and returns the distance with negative numbers", () => {
      const commonPoints = [
        [3, -1],
        [-4, 3],
        [1, 2]
      ];
      const expectedOutput = 3;
      const actualOutput = manhattanDistance.calculateDistance(commonPoints);
      assert.strictEqual(actualOutput, expectedOutput);
    });
    it("calculates the manhattan distance", async () => {
      let expectedOutput = 159;
      let actualOutput = await manhattanDistance.run("test/fixtures/wires.txt");
      assert.deepStrictEqual(actualOutput, expectedOutput);

      expectedOutput = 135;
      actualOutput = await manhattanDistance.run("test/fixtures/wires2.txt");
      assert.deepStrictEqual(actualOutput, expectedOutput);
    });
  });
});

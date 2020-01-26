/*

  turn file into two separate arrays for two wires
  go through wire 1's array and plot coordinate points on an array starting at (1,1) through to the ending
  e.g. R1004,D53,L10,U126,R130,
  [{1,1}, {2,1}, {3,1}, ... {1004, 1}]
  Do the same for the second wire

  filter the two arrays for the same values
*/

const fs = require("fs");
const readLine = require("readline");
const stream = require("stream");
const path = require("path");

function readLines(file) {
  const output = new stream.PassThrough({ objectMode: true });
  const rl = readLine.createInterface({
    input: fs.createReadStream(file)
  });
  rl.on("line", line => {
    output.write(line);
  });
  rl.on("close", () => output.push(null));
  return output;
}

async function createArrayFromFile(file) {
  const array = [];
  for await (const line of readLines(file)) {
    array.push(line.split(","));
  }
  return array;
}

function getNewCoordinates(direction, distance, wirePoints) {
  const currentXValue = wirePoints[wirePoints.length - 1][0];
  const currentYValue = wirePoints[wirePoints.length - 1][1];

  if (direction === "U") {
    return [currentXValue, currentYValue + 1];
  } else if (direction === "D") {
    return [currentXValue, currentYValue - 1];
  } else if (direction === "L") {
    return [currentXValue - 1, currentYValue];
  } else {
    return [currentXValue + 1, currentYValue];
  }
}

function getDistance(point1, point2) {
  return Math.abs(point1) + Math.abs(point2);
}

module.exports = {
  calculateWirePoints: function(wire) {
    console.log(new Date().toLocaleTimeString(), "calculating all points...");

    const wirePoints = [[0, 0]];

    for (index in wire) {
      const vector = wire[index];
      const direction = vector.charAt(0);
      const distance = parseInt(vector.substring(1, vector.length));

      for (let i = 1; i <= distance; i++) {
        const newCoordinates = getNewCoordinates(
          direction,
          distance,
          wirePoints
        );
        wirePoints.push(newCoordinates);
      }
    }
    return wirePoints;
  },
  filterCommonValues: function(wire1, wire2) {
    console.log(
      new Date().toLocaleTimeString(),
      "filtering for common values..."
    );
    const commonValues = [];

    for (let i = 1; i < wire1.length; i++) {
      const wire1Coord = wire1[i];
      for (let j = 0; j < wire2.length; j++) {
        const wire2Coord = wire2[j];

        if (
          wire1Coord[0] === wire2Coord[0] &&
          wire1Coord[1] === wire2Coord[1]
        ) {
          commonValues.push(wire1Coord);
        }
      }
    }
    return commonValues;
  },
  calculateDistance: function(commonPoints) {
    console.log(new Date().toLocaleTimeString(), "calculating distance...");

    let smallestDistance = getDistance(commonPoints[0][0], commonPoints[0][1]);
    commonPoints.forEach(point => {
      const distance = getDistance(point[0], point[1]);
      if (smallestDistance > distance) {
        smallestDistance = distance;
      }
    });
    console.log(smallestDistance);
    return smallestDistance;
  },
  run: async function(file) {
    const [wire1Array, wire2Array] = await createArrayFromFile(file);
    const wire1Coordinates = this.calculateWirePoints(wire1Array);
    const wire2Coordinates = this.calculateWirePoints(wire2Array);
    const commonPoints = this.filterCommonValues(
      wire1Coordinates,
      wire2Coordinates
    );

    return this.calculateDistance(commonPoints);
  }
};

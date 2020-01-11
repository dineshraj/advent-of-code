const fs = require("fs");
const readLine = require("readline");
const stream = require("stream");
const path = require("path");

const fuel = [];

function readLines(file) {
  const output = new stream.PassThrough({ objectMode: true });
  const rl = readLine.createInterface({
    input: fs.createReadStream(path.join(__dirname, file))
  });

  rl.on("line", line => {
    output.write(line);
  });
  rl.on("close", () => {
    output.push(null);
  });

  return output;
}

async function createArrayFromFile(file) {
  const array = [];
  for await (const line of readLines(file)) {
    array.push(parseInt(line));
  }
  return array;
}

module.exports = {
  calculateFuel: function(mass) {
    return Math.floor(mass / 3) - 2;
  },
  processMass: function(massArray) {
    return massArray.map(mass => {
      return this.calculateFuel(mass);
    }, 0);
  },
  calculateTotalFuel: async function(file) {
    const massArray = await createArrayFromFile(file);
    const fuelArray = this.processMass(massArray);

    return fuelArray.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }
};

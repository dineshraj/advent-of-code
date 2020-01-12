const fs = require("fs");
const readLine = require("readline");
const stream = require("stream");
const path = require("path");

function readLines(file) {
  const output = new stream.PassThrough({ objectMode: true });
  const rl = readLine.createInterface({
    input: fs.createReadStream(path.join(__dirname, file))
  });
  rl.on("line", line => output.write(line));
  rl.on("close", () => output.push(null));
  return output;
}

async function createArrayFromFile(file) {
  const array = [];
  for await (const line of readLines(file)) {
    array.push(parseInt(line));
  }
  return array;
}

function sumArray(array) {
  return array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

module.exports = {
  calculateFuel: function(mass) {
    const fuel = Math.floor(mass / 3) - 2;
    return fuel < 0 ? 0 : fuel;
  },
  calculateFuelOfArray: function(massArray) {
    return massArray.map(mass => {
      return this.calculateFuel(mass);
    });
  },
  calculateSumOfFuel: async function(file) {
    const massArray = await createArrayFromFile(file);
    const fuelArray = this.calculateFuelOfArray(massArray);
    return sumArray(fuelArray);
  },
  calculateSumOfFuelForFuel: async function(file) {
    const massArray = await createArrayFromFile(file);
    const fuelArray = this.calculateFuelForFuel(massArray);
    return sumArray(fuelArray);
  },
  calculateFuelForFuel: function(array) {
    if (!array.some(val => val > 0)) {
      return [];
    } else {
      const processedArray = this.calculateFuelOfArray(array);
      const newArray = this.calculateFuelForFuel(processedArray);
      return newArray.concat(processedArray);
    }
  }
};

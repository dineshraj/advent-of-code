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

module.exports = {
  calculateFuel: function(mass) {
    return Math.floor(mass / 3) - 2;
  },
  calculateTotalFuel: async function(file) {
    let total = 0;
    for await (const line of readLines(file)) {
      const fuel = this.calculateFuel(line);
      total += parseInt(fuel);
    }
    return total;
  }
};

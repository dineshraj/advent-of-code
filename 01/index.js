const fs = require("fs");
const readLine = require("readline");

const rl = readLine.createInterface({
  input: fs.createReadStream("input.txt"),
  outuput: process.stdout
});

const fuel = [];

function calculateFuel(mass) {
  return Math.floor(mass / 3) - 2;
}

rl.on("line", input => {
  fuel.push(calculateFuel(input));
});

rl.on("close", () => {
  const total = fuel.reduce((a, b) => a + b, 0);
  console.log("total", total);
});

// this file is just to get values in the terminal
var fuelCounterUpper = require("./src/fuelCounterUpper");
var intcodeComputer = require("./src/intcodeComputer");
var manhattanDistance = require("./src/manhattanDistance");

var file = process.argv[2];
// async function index() {
//   const fuel = await fuelCounterUpper.calculateSumOfFuelOfFuel(file);
//   console.log("total fuel:", fuel);
// }
// function index() {
//   const intcode = intcodeComputer.findOutputFromPairs(file);
//   console.log("output:", 100 * intcode[1] + intcode[2]);
// }
function index() {
  const distance = manhattanDistance.run(file);
  console.log("distance", distance);
}

index();

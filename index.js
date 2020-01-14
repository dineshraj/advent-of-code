// this file is just to get values in the terminal
var fuelCounterUpper = require("./src/fuelCounterUpper");
var intcodeComputer = require("./src/intcodeComputer");


var file = process.argv[2];
// async function index() {
//   const fuel = await fuelCounterUpper.calculateSumOfFuelOfFuel(file);
//   console.log("total fuel:", fuel);
// }
function index() {
  const intcode = intcodeComputer.runProgramme(file);
  console.log("output:", intcode[0]);
}

index();

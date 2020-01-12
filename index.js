var fuelCounterUpper = require("./fuelCounterUpper");

// this file is just to get values in the terminal

var file = process.argv[2];
async function index() {
  const fuel = await fuelCounterUpper.calculateSumOfFuelOfFuel(file);
  console.log("total fuel:", fuel);
}

index();

var fuelCounterUpper = require("./fuelCounterUpper");

var file = process.argv[2];
async function index() {
  const fuel = await fuelCounterUpper.calculateTotalFuel(file);
  console.log("total fuel:", fuel);
}
index();

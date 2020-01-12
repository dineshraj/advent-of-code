const fs = require("fs");

function createArrayFromFile(file) {
  const data = fs.readFileSync(file);
  const processedData = data
    .toString()
    .split("\n")
    .map(e => {
      return e.split(",");
      // return parseInt(e);
    })[0]
    .map(e => parseInt(e));

  return processedData;
}

module.exports = {
  runProgramme: function(file) {
    const intArray = createArrayFromFile(file);

  }
};

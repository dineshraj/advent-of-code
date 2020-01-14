const fs = require("fs");

function createArrayFromFile(file) {
  const data = fs.readFileSync(file);
  const processedData = data
    .toString()
    .split("\n")
    .map(e => e.split(","))[0]
    .map(e => parseInt(e));
  return processedData;
}

module.exports = {
  runProgramme: function(file) {
    const intArray = createArrayFromFile(file);

    for (let i = 0; i < intArray.length + 1; i++) {
      if (intArray[i] === 1) {
        firstElemPosition = intArray[i + 1];
        secondElemPosition = intArray[i + 2];
        resultPosition = intArray[i + 3];

        const sum = intArray[firstElemPosition] + intArray[secondElemPosition];
        intArray[resultPosition] = sum;
        // step forward 4 positions, beause the for loop
        // also increments i, we only add 3 to it
        i = i + 3;
      } else if (intArray[i] === 2) {
        firstElemPosition = intArray[i + 1];
        secondElemPosition = intArray[i + 2];
        resultPosition = intArray[i + 3];

        const sum = intArray[firstElemPosition] * intArray[secondElemPosition];
        intArray[resultPosition] = sum;
        // step forward 4 positions, beause the for loop
        // also increments i, we only add 3 to it
        i = i + 3;
      } else if (intArray[i] === 99) {
        break;
      }
    }

    return intArray;
  }
};

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

function iterateArray(intArray) {
  for (let i = 0; i < intArray.length + 1; i++) {
    if (intArray[i] === 1 || intArray[i] === 2) {
      const { resultPosition, sum } = processValues(intArray, i);
      intArray[resultPosition] = sum;
      // step forward 4 positions, the loop also increments i, so only add 3
      i = i + 3;
    } else if (intArray[i] === 99) {
      break;
    }
  }
  return intArray;
}

function processValues(intArray, i) {
  const firstElemPosition = intArray[i + 1];
  const secondElemPosition = intArray[i + 2];
  const resultPosition = intArray[i + 3];
  const sum =
    intArray[i] === 1
      ? intArray[firstElemPosition] + intArray[secondElemPosition]
      : intArray[firstElemPosition] * intArray[secondElemPosition];

  return { resultPosition, sum };
}

module.exports = {
  runProgramme: function(file) {
    const intArray = createArrayFromFile(file);
    return iterateArray(intArray);
  },
  findOutputFromPairs: function(file) {
    const intArray = createArrayFromFile(file);
    const VALUE = 19690720;

    for (let noun = 0; noun < 100; noun++) {
      intArray[1] = noun;
      for (let verb = 0; verb < 100; verb++) {
        intArray[2] = verb;
        const processedArray = iterateArray([...intArray]);

        if (processedArray[0] === VALUE) {
          return processedArray;
        }
      }
    }
  }
};

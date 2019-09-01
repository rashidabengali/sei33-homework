exports.MTA = {
  trainLines: {
    N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    L: ["8th", "6th", "Union Square", "3rd", "1st"],
    "6": [
      "Grand Central",
      "33rd",
      "28th",
      "23rd",
      "Union Square",
      "Astor Place"
    ]
  },

  // function to define train lines
  // input: train line name (string)
  // output: clone of train line (array)
  getLine: function(line) {
    return Array.from(this.trainLines[line]);
  },

  // function to get segment of train line
  // input: train line (array), starting station name (string), destination station on same line (string)
  // output: stations passed on the train line (array)
  lineSeg: function(line, start, finish) {
    const endIndex = line.indexOf(finish);
    const startIndex = line.indexOf(start);
    // using station index to calculate the direction of the ride
    if (startIndex < endIndex) {
      return line.splice(startIndex + 1, endIndex - startIndex);
    }
    return line.splice(endIndex, startIndex - endIndex).reverse();
  },

  tripMessage1: function(line, stationsPassed) {
    return `You must travel through the following stops on the ${line} line: ${stationsPassed.join(
      ", "
    )}.`;
  },

  checkInput: function(startLine, startStation, finalLine, finalStation) {
    const errorMessage = [];
    if (
      !Object.keys(this.trainLines).includes(startLine) ||
      !Object.keys(this.trainLines).includes(finalLine)
    ) {
      errorMessage.push("Invalid lines");
    } else if (
      this.getLine(startLine).indexOf(startStation) < 0 ||
      this.getLine(finalLine).indexOf(finalStation) < 0
    ) {
      errorMessage.push("Invalid station names");
    }
    return errorMessage;
  },

  // function to run planTrip
  // input: first train line name (string), firt station name (string), destination train line (string),
  // destination station name (string).
  // first check the input train line and station are valid.
  // output: error message if input are invalid. exit function.
  // then check if the trip involve only one train line,
  // output: print details of one train line trip and total stops. exit function.
  // if trips involve two train line:
  // output: print first trip details then print second trip details. Print total stops involed. exit function.
  planTrip: function(startLine, startStation, finalLine, finalStation) {
    // input checking
    const errorMessage = this.checkInput(
      startLine,
      startStation,
      finalLine,
      finalStation
    );
    if (errorMessage.length > 0) {
      return errorMessage;
      // when trip happen on one line only
    } else if (startLine === finalLine) {
      const stopsPassed = this.lineSeg(
        this.getLine(startLine),
        startStation,
        finalStation
      );
      return (
        this.tripMessage1(startLine, stopsPassed) +
        `\n${stopsPassed.length} stops in total.`
      );
    }
    const tripDetails = [];
    // stations travelled on starting line
    const firstTrip = this.lineSeg(
      this.getLine(startLine),
      startStation,
      "Union Square"
    ); //trip from start to US station
    // only show trip on line when array is not empty
    tripDetails.push(
      firstTrip.length > 0
        ? this.tripMessage1(startLine, firstTrip) + `\nChange at Union Square.`
        : `\nChange at Union Square.`
    );
    // stations travelled on finish line
    const secTrip = this.lineSeg(
      this.getLine(finalLine),
      "Union Square",
      finalStation
    ); //trip from US to final stop.
    tripDetails.push(
      this.tripMessage1(finalLine, secTrip) +
        `\n${firstTrip.length + secTrip.length} stops in total.`
    );
    return tripDetails;
  }
};

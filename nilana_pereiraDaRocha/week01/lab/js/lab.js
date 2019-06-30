
// train lines
var lines = {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
};

var intersectionPoint = 'Union Square';

var planTrip = function (line1, stop1, line2, stop2) {
    // Get the program to work for a single line before trying to tackle multiple lines.
    if (line1 === line2) {
        let firstLineStop = lines[line1]; // lines.N
        let count1 = firstLineStop.indexOf(stop1); // 0 
        //indexOf() I used it to returns the first index at which a given element(stop1)

        let secondLineStop = lines[line2]; // lines.N
        let count2 = secondLineStop.indexOf(stop2); // ?
        let stopsCount = count2 - count1;

        let stopComplement = '';
        if (stopsCount > 1) {
            stopComplement = 's';
        }

        // create a array started with the smaller number 
        let startArray = 0;
        let endArray = 0;
        let stops = [];

        if (count2 > count1) {
            startArray = count1 + 1;
            endArray = count2 + 1;
            stops = secondLineStop.slice(startArray, endArray); // used slice to The slice() method returns a shallow copy of 
            // a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
        } else {
            startArray = count2;
            endArray = count1;
            stops = secondLineStop.slice(startArray, endArray).reverse(); // used reverse to The first array element becomes the last, 
            // and the last array element becomes the first. 
        }

        console.log(`
    You must travel through the following stops on the ${line1} line: ${stops.join(", ")}.
    ${stops.length} stop${stopComplement} in total.`);

    }
    // we need to change lines
    else {
        let firstLineStop = lines[line1]; // lines.N
        let count1 = firstLineStop.indexOf(stop1); // 0
        let intersectionIndex = firstLineStop.indexOf(intersectionPoint); // 0
        let movingAhead = count1 > intersectionIndex;

        if (movingAhead) {
            stops = firstLineStop.slice(intersectionIndex, count1 + 1).reverse();
        } else {
            stops = firstLineStop.slice(count1 + 1, intersectionIndex + 1);
        }

        let secondLineStop = lines[line2]; // lines.N
        let intersectionIndex2 = secondLineStop.indexOf(intersectionPoint); // ?
        let count2 = secondLineStop.indexOf(stop2); // ?

        // criamos o array sempre começando pelo menor numero

        let stops2 = [];
        let movingAhead2 = count2 > intersectionIndex2;


        if (movingAhead2) {
            stops2 = secondLineStop.slice(intersectionIndex2 + 1, count2 + 1);
        } else {
            stops2 = secondLineStop.slice(count2, intersectionIndex2).reverse();
        }

        let quantity = stops.length + stops2.length;

        console.log(`
You must travel through the following stops on the ${line1} line: ${stops.join(", ")}.
Change at Union Square.
Your journey continues through the following stops: ${stops2.join(", ")}.
${quantity} stops in total.
        `);
        // The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by 
        // commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

    }
};


console.log(planTrip('N', 'Times Square', '6', '33rd'));
console.log(planTrip('N', '23rd', 'N', 'Times Square'));
console.log(planTrip('N', 'Times Square', '6', '33rd'));
console.log(planTrip('N', 'Times Square', '6', 'Astor Place'));
console.log(planTrip('N', 'Times Square', 'N', '34th'));

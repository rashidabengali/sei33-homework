console.log("This is MTA")

const nLine = ['TS', '34', '28', '23', 'US', '8'];
const lLine = ['8', '26', 'US', 'AP'];
const six = ['GC', '33', '28', '23', 'US', 'AP'];

const toUs = function (line, startStop) {
const changeStopIndex  = line.indexOf('US');
if (line.indexOf(startStop) < changeStopIndex) {
    for (let i = line.indexOf(startStop)-1; i <= changeStopIndex; i++) {
        stopsRouteA.push(line[i]);
    };
};
    for (let i = line.indexOf(startStop)+1; i >= changeStopIndex; i--) {
        stopsRouteA.push(line[i]);
};
console.log(`You must travel through the following stops on the ${ line } line: ${ stopsRouteA }. \nChange at Union Square.`);
}

const fromUs = function (line, finalStop) {
const changeStopIndex = line.indexOf('US');
if (line.indexOf(finalStop) < changeStopIndex) {
    for (let i = changeStopIndex; i > line.indexOf(finalStop); i--){
        stopsRouteB.push(line[i]);
    } 
}
    for (let i = changeStopIndex; i < line.indexOf(finalStop); i++) {
        stopsRouteB.push(line[i]);
};
console.log(`Your journey continues through the following stops: ${ stopsRouteB }.\n${ (stopsRouteA.length + stopsRouteB.length) } stops in total.`);
};
const planTrip = function (startLine, startStop, finalLine, finalStop) {
    stopsRouteA = [];
    stopsRouteB = [];
    toUs(startLine, startStop);
    fromUs(finalLine, finalStop);
}
planTrip(nLine, '34', six, '33');
planTrip(six, 'GC', lLine, '8');
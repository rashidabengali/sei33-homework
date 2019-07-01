const UNIONSQUARE = 'Union Square';
const route = {
    "N":["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L":["8th","6th", "Union Square", "3rd","1st"],
    "6":["Grand Central","33rd","28th","23rd", "Union Square","Astor Place"]
}

const lineObject = function(lineName, stationName ){
    return {
        line: lineName,
        station: stationName
    }
}

const findTheRoute = function(start, destination) {
    let result = [];
    let arrayLine = route[destination.line.toUpperCase()];

    // the line doesn't exits, return empty route
    if (!arrayLine){
        return result;
    }

    // search start station index
    const indexStart = arrayLine.findIndex((x)=>{
        return x === start.station;
    });

    // search destination station index
    let indexDestination = arrayLine.findIndex((x)=>{
        return x === destination.station;
    });

    // start or destination station doesn't exits from route, return empty route
    if (indexStart === -1 || indexDestination === -1){
        return result;
    }

    if (indexStart <= indexDestination){
        // forward
        for (let i = indexStart+1; i <= indexDestination; i++) {
            result.push(lineObject(start.line, arrayLine[i]));
        }
    }else{
        //backward
        for (let j = indexStart; j > indexDestination; j--) {
            result.push(lineObject(start.line, arrayLine[j-1]));
        }
    }

    return result;
}

const printTheRoute = function(route){
    // the route doesn't exits
    if (route.length === 0){
        console.log('Please check your start and destination');
        return;
    }

    // search union square index from route
    let indexOfUnionSquare = route.findIndex((x)=>{
        return x.station === UNIONSQUARE;
    });

    let afterChanged = "";
    let mainRoute = "";

    if (indexOfUnionSquare !== -1 && indexOfUnionSquare !== route.length) {
        // change line
        mainRoute = route.slice(0, indexOfUnionSquare+1).map((x)=>{
            return x.station;
        }).join(", ");
        afterChanged = `Your journey continues through the following stops on the ${ route[indexOfUnionSquare + 1].line.toUpperCase() } line:` + 
        route.slice(indexOfUnionSquare+1, route.length).map((x) =>{
            return x.station;
        }).join(", ");

    }else{
        // direct
        mainRoute = route.map((x)=> {
            return x.station;
        }).join(", ");
    }

    console.log(`You must travel through the following stops on the ${ route[0].line.toUpperCase() } line: ${ mainRoute }.`);

    if (afterChanged.length > 0){
        console.log(`Change at Union Square.`);
        console.log(`${afterChanged}.`);
    }
    console.log(`${ route.length} stops in total.`);
}

const planTrip = function(lineStart, stationStart, lineDestination, stationDestination ){
    const start = lineObject(lineStart, stationStart);
    const destination = lineObject(lineDestination, stationDestination);
    
    if (start.line !== destination.line){
        // go to union square
        let unionSquareDestination = lineObject(start.line, UNIONSQUARE );
        let result = findTheRoute(start, unionSquareDestination);

        if (result.length > 0){
            // start from union square to destination line
            start.line = destination.line;
            start.station = UNIONSQUARE;
            
            let destinationResult = findTheRoute(start, destination);
            if (destinationResult.length > 0){
                result = result.concat(destinationResult);
            }else{
                result = [];
            }
        }
        
        printTheRoute(result);
    }else{
        // direct line
        let result = findTheRoute(start, destination);
        printTheRoute(result);
    }
}
//planTrip('N', 'Times Square', 'N', '23rd');
//planTrip('N', 'Times Square', '6', '33rd');
//planTrip('L', '6th', 'L', '1st');
//planTrip('L', '1st', '6', 'Astor Place');
//planTrip('6', '33rd', 'L', '3rd');
//planTrip('L', '3rd', 'L', '33rd');
//planTrip('n', 'Times Square', 'n', '23rd');
planTrip('r', 'Times Square', 'n', '23rd');
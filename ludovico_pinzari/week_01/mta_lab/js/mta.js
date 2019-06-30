// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


//---------- Skip these utilities function to parse the strings

//Utility function to check if a character is a digit
const isDigit = function ( char ) {

  if ( char === '0' ) {
    return true;
  } else if ( char === '1' ) {
    return true;
  } else if ( char === '2' ) {
    return true;
  } else if ( char === '3' ) {
    return true;
  } else if ( char === '4' ) {
    return true;
  } else if ( char === '5' ) {
    return true;
  } else if ( char === '6' ) {
    return true;
  } else if ( char === '7' ) {
    return true;
  } else if ( char === '8' ) {
    return true;
  } else if ( char === '9' ) {
    return true;
  } else if ( char === '10' ) {
    return true;
  } else {
    return false;
  }

};

// utility function to verify if a string is made up of digits

const areDigits = function ( str ) {

   for ( let i = 0; i < str.length; i++ ) {
     if ( !isDigit(str[i]) ) {
       return false;
     }
   }
   return true;
};

// utility function to verify if a string is an Ordinal

const isOrdinal = function ( str ) {

  const initial = str.slice(0,str.length-2);
  const end = str.slice(str.length-2,str.length);

  if ( areDigits(initial)){
    const ten_remainder = (parseInt(initial,10))%10;
    if ( (ten_remainder === 1) && (end !== 'st') ) {
      return false;
    } else if ((ten_remainder === 2) && (end !== 'nd')) {
      return false;
    } else if ((ten_remainder === 3) && (end !== 'rd')) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
//----------------------------------------------------------------

/* function: mta_line
 *
 * Description.
 *  mta_line is a factory function to produce an object that models a line of a subway
 *
 * object instances Properties.
 *  name {string} The line's name
 *  stops {array} An array of strings repesenting the line's stops
 *
 * object instances Methods.
 *  General
 *   route(origin, destination): returns an array of string representing the path from origin to destination
 *   noOfStops(origin, destination): returns an integer indicating the total number of stops
 *   stations(): returns an array of the stations (hubs) to connect other lines.. (I didn't use in this hw)
*/

function mta_line ( name, line ) {
 return {

   name : name,
   stops : line,

   route: function (origin, destination) {

     const start = this.stops.indexOf(origin);
     const end = this.stops.indexOf(destination);
     if ( start < end ) {
       return this.stops.slice(start, end+1);
     } else {
       return this.stops.slice(end, start+1).reverse();
     }
   },

   noOfStops: function (origin, destination) {

     return (this.route(origin, destination)).length-1;

   },

   stations: function () {

     const line_stops = this.stops;
     const stations = [];
     for ( i in line_stops ) {
       stop = line_stops[i];
       if ( !isOrdinal(stop) ) {
         stations.push(stop);
       }
     }//end for
     return stations;
   }
 };//end return
};

/* function: mta_route
 *
 * Description.
 *  mta_route is a factory function to produce an object that models a route of a subway
 *
 * object instances Properties.
 *   - originLine {string} The origin line's name
 *   - destLine {string} The destination line's name
 *   - changeLine {boolean} a boolean value to indicate whether we changed the line or not
 *  (note there might be cases the line is interrupted so we need this property ).
 *   - route {array} array of string represting the an ordered list of stops from origin to destination
 *
 * object instances Methods.
 *  General
 *   routeToString(route): return a string represting the stops in the route array
 *   routePlanToString(): returns a string represting the route from origin to destination in the specified format
*/

function mta_route ( originLine, destLine, changeLine, route ) {

  return {

    originLine: originLine,
    destLine: destLine,
    changeLine: changeLine,
    route: route,

    noOfStops: function ( ) {
      return (this.route.length);
    },

    routeToString: function ( route ) {

      let description = '';

      for ( let i = 0; i < route.length -1; i++ ) {
        description += route[i] + ', ';
      }
      description += route[route.length-1];
      return description;
    },

    routePlanToString: function ( ) {

      let description = '';
      const startLine = this.originLine;
      const endLine = this.destLine;
      const changeLine = this.changeLine;
      const route = this.route;

      description += `You must travel through the following stops on the `;

      if ( !changeLine ) {
        description += `\n \t ${startLine} line: ${this.routeToString(route)}`;
      } else {
        const startLineRoute = route.slice(0,route.indexOf(`Union Square`)+1);
        const endLineRoute = route.slice(route.indexOf(`Union Square`)+1,route.length);
        description += `\n \t ${startLine} line: ${this.routeToString(startLineRoute)}`;
        description += `\n \t Change at Union Square`;
        description += `\nYour journey continues through the following stops on the `;
        description += `\n \t ${endLine} line: ${this.routeToString(endLineRoute)}`;
      }

      description += `\n ${this.noOfStops()} stops in total.`;

      return description;
    }//end routePlanToString
  };//end return
};

/* Oject: mta
 *
 * Description.
 *  mta_route is an object represting the NY's subway
 *
 * Mta_route Properties.
 *   - lines {array} Array of line objects (see mta_line factory)
 *
 * mta Methods.
 *  Mutator method
 *   addLine(line): add an object line to this object
 *  Accessor method
 *   getLine(line): return a line object of mta, given as a parameter the line's name (string)
 *  General
 *  - singleHubRoute(originStop, originLine, destStop, destLine): return a route object (see mta_route factory function)
 *    (Note: I followed the function signature as indicated in the specification but we can add an hub parameter
 *    indicating the change station. This function might be used in case we want to extend to multiHubs...)
 *  - toString(): return a string represting the mta lines
*/


const mta = {

  lines: [],

  addLine: function ( line ) {
    this.lines.push(line);
  },

  getLine: function ( line ) {

    const lines = this.lines;
    for ( line_i in lines ) {
      if ( lines[line_i].name === line ) {
        return lines[line_i];
      }
    }//end for
  },

  singleHubRoute: function ( originStop, originLine, destStop, destLine ) {

    let route;
    const startLine = this.getLine( originLine );
    let changeLine = false;

    if ( originLine === destLine ) {

      route = startLine.route(originStop, destStop);

    } else {

      changeLine = true;
      const endLine = this.getLine( destLine );
      const startLineRoute = startLine.route( originStop, 'Union Square' );
      const endLineRoute = endLine.route( 'Union Square', destStop );
      startLineRoute.pop();
      route = startLineRoute.concat(endLineRoute);

    }

    const routePlan = mta_route( originLine, destLine, changeLine, route );
    return routePlan;

  },

  toString: function () {

    let mta_diagram = "";
    const lines = this.lines;

    for ( line_i in lines ) {
      mta_diagram += `${lines[line_i].name}: `;
      const stops = lines[line_i].stops;
      for ( let i = 0; i < stops.length-1; i++ ) {
        mta_diagram += stops[i] + `, `;
      }
      mta_diagram += stops[stops.length-1] + `\n`;
    }//end outer for
    return mta_diagram;
  }

};//end mta object

//--------------------------------- TESTING --------------------------------//

// create mta lines
const line_N = mta_line('N',['Times Square','34th','28th','23rd','Union Square','8th']);
const line_L = mta_line('L',['8th','6th','Union Square','3rd','1st']);
const line_6 = mta_line('6',['Grand Central','33rd','28th','23rd','Union Square','Astor Place']);

// add line objects to mta object
mta.addLine(line_N);
mta.addLine(line_L);
mta.addLine(line_6);

// display mta
console.log(mta.toString());
console.log(`---------------------------------------------`);

// Units Test single line
const routePlan1 = mta.singleHubRoute('34th','N','8th','N');
console.log("Test single line:");
console.log("mta.singleHubRoute('34th','N','8th','N')");
console.log(routePlan1.routePlanToString());
console.log(`---------------------------------------------`);

const routePlan2 = mta.singleHubRoute('8th','N','34th','N');
console.log("Test single line reversed:");
console.log("mta.singleHubRoute('8th','N','34th','N')");
console.log(routePlan2.routePlanToString());
console.log(`---------------------------------------------`);

// display mta
console.log(mta.toString());
console.log(`---------------------------------------------`);

// Units Test two lines
const routePlan3 = mta.singleHubRoute('Times Square','N','Grand Central','6');
console.log("Test two lines:");
console.log("mta.singleHubRoute('Times Square','N','Grand Central','6')");
console.log(routePlan3.routePlanToString());
console.log(`---------------------------------------------`);

const routePlan4 = mta.singleHubRoute('Grand Central','6','Times Square','N');
console.log("Test two lines reversed:");
console.log("mta.singleHubRoute('Grand Central','6','Times Square','N')");
console.log(routePlan4.routePlanToString());
console.log(`---------------------------------------------`);

const routePlan5 = mta.singleHubRoute('28th','N','28th','6');
console.log("Test two lines with the same stop's name:");
console.log("mta.singleHubRoute('28th','N','28th','6')");
console.log(routePlan5.routePlanToString());
console.log(`---------------------------------------------`);

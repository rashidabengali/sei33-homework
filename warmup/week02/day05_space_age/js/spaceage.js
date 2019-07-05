console.log('run');

// Version 1
/*
const planetData = {
  Earth: 1,
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132
};

const spaceAge = function (ageInSeconds) {
  let ageInEarthYears = ageInSeconds / 31557600;
  for (let planets in planetData) {
    let age = (ageInEarthYears / planetData[planets]).toFixed(2);
    console.log(`Your age in ${planets} is ${age} ${planets} years`);
  }
};

spaceAge(1000000000);
*/
//Version 2

const spaceAge = {

  planetData: {
    Earth: 1,
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132
  },

  ageInEarthYears: function (ageInSeconds) {
    return ageInSeconds / 31557600;
  },

  calculateAge: function (ageInSeconds) {
    const earthYears = this.ageInEarthYears(ageInSeconds)
    for (let planets in this.planetData) {
      let age = (earthYears/ this.planetData[planets]).toFixed(2);
      console.log(`Your age in ${planets} is ${age} ${planets} years`);
    }
  }
};

spaceAge.calculateAge(1000000000);

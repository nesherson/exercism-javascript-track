//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  const earthAge = seconds / 365.25 / 24 / 60 / 60;

  switch (planet) {
    case 'mercury': {
      const mercuryAge = earthAge / 0.2408467;
      return parseFloat(mercuryAge.toFixed(2));
    }
    case 'venus':
      const venusAge = earthAge / 0.61519726;
      return parseFloat(venusAge.toFixed(2));
    case 'mars':
      const marsAge = earthAge / 1.8808158;
      return parseFloat(marsAge.toFixed(2));
    case 'jupiter':
      const jupiterAge = earthAge / 11.862615;
      return parseFloat(jupiterAge.toFixed(2));
    case 'saturn':
      const saturnAge = earthAge / 29.447498;
      return parseFloat(saturnAge.toFixed(2));
    case 'uranus':
      const uranusAge = earthAge / 84.016846;
      return parseFloat(uranusAge.toFixed(2));
    case 'neptune':
      const neptuneAge = earthAge / 164.79132;
      return parseFloat(neptuneAge.toFixed(2));
    default:
      return parseFloat(earthAge.toFixed(2));
  }
};

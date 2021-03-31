//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const gigasecond = 1000000000;
  const dateInSeconds = Date.parse(date) / 1000;
  const secondsPassed = (dateInSeconds + gigasecond) * 1000;
  const newDate = new Date(secondsPassed);
  return newDate;
};

// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const juicesTimeToMix = {
  'Pure Strawberry Joy': 0.5,
  Energizer: 1.5,
  'Green Garden': 1.5,
  'Tropical Island': 3,
  'All or Nothing': 5,
  default: 2.5,
};
/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  if (Object.prototype.hasOwnProperty.call(juicesTimeToMix, name))
    return juicesTimeToMix[name];

  return juicesTimeToMix.default;
}

const limeWedgesFromLime = {
  small: 6,
  medium: 8,
  large: 10,
};

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limeCount = 0;
  let wedgesCount = 0;
  limes.forEach((lime) => {
    if (wedgesCount < wedgesNeeded) {
      wedgesCount += limeWedgesFromLime[lime];
      limeCount++;
    }
  });

  return limeCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let tempTimeLeft = timeLeft;
  let tempOrders = [...orders];
  let index = 0;

  do {
    tempTimeLeft -= timeToMixJuice(orders[index]);
    tempOrders.shift();
    index++;
  } while (tempTimeLeft > 0 || (tempOrders.length !== 0 && tempTimeLeft > 0));

  return tempOrders;
}

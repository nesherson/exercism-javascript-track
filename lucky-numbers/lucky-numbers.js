// @ts-check

function arrSum(arr) {
  let sum = 0;
  let power = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(10, power) * arr[i];
    power--;
  }

  return sum;
}

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return arrSum(array1) + arrSum(array2);
}

const areEqual = (num1, num2) => parseInt(num1) === parseInt(num2);

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let tempArr = value.toString().split('');

  if (tempArr.length % 2 === 0) {
    let firstNum, lastNum;

    for (let i = 0; i < tempArr.length; i++) {
      firstNum = tempArr[i];
      lastNum = tempArr[tempArr.length - i - 1];

      if (!areEqual(firstNum, lastNum)) return false;
    }

    return true;
  } else {
    let firstNum, lastNum;

    for (let i = 0; i < tempArr.length - 1; i++) {
      firstNum = tempArr[i];
      lastNum = tempArr[tempArr.length - i - 1];

      if (!areEqual(firstNum, lastNum)) return false;
    }

    return true;
  }
}

function isAlpha(str) {
  return /^[a-zA-Z()]+$/.test(str);
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === '' || input === null || typeof input === 'undefined')
    return 'Required field';

  if (isAlpha(input.split(' ').join('')) || input === '0')
    return 'Must be a number besides 0';

  if (typeof parseInt(input.trim()) === 'number') return '';
}

//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Without using Array.prototype.reverse() method
export const reverseString = (str) => {
  const tempArr = str.split('');
  const len = tempArr.length - 1;
  return tempArr.map((el, i, arr) => arr[len - i]).join('');
};

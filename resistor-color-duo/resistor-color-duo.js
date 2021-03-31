//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  
  const resistorColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
  let values = [];
  for (let i = 0; i < colors.length; i++) {
    if (i > 1) break;
    values.push(resistorColors.indexOf(colors[i]));
  }
  return parseInt(values.join(''), 10); 
};


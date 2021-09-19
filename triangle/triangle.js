//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  isTriangleViolation() {
    for (let i = 0; i < this.sides.length; i++) {
      const tempArr = this.sides.filter((el, elIndex) => elIndex !== i);
      const curr = this.sides[i];
      const sumOfSides = tempArr.reduce((prev, c) => prev + c, 0);
      if (curr > sumOfSides) return true;
    }

    return false;
  }

  get isEquilateral() {
    const zeroSides = this.sides.every((s) => s === 0);

    if (zeroSides) return false;

    const sideLen = this.sides[0];
    return this.sides.every((s) => s === sideLen);
  }

  get isIsosceles() {
    if (this.isEquilateral) return true;

    if (this.isTriangleViolation()) return false;

    for (let i = 0; i < this.sides.length; i++) {
      const tempArr = this.sides.filter((s) => this.sides[i] === s);
      if (tempArr.length === 2) return true;
    }

    return false;
  }

  get isScalene() {
    if (this.isTriangleViolation()) return false;

    for (let i = 0; i < this.sides.length; i++) {
      const tempArr = this.sides.filter((el, elIndex) => i !== elIndex);
      const isOneEqual = tempArr.some((s) => this.sides[i] === s);
      if (isOneEqual) return false;
    }
    return true;
  }
}

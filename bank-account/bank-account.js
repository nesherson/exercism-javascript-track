//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._isOpen = false;
    this._balance = 0;
  }

  open() {
    if (!this._isOpen) {
      this._isOpen = true;
    } else {
      throw new ValueError();
    }
  }

  close() {
    if (this._isOpen) {
      this._isOpen = false;
      this._balance = 0;
    } else {
      throw new ValueError();
    }
  }

  deposit(depositAmount) {
    if (depositAmount > 0 && this._isOpen) {
      this._balance += depositAmount;
    } else {
      throw new ValueError();
    }
  }

  withdraw(withdrawAmount) {
    if (withdrawAmount <= this._balance && withdrawAmount > 0 && this._isOpen) {
      this._balance -= withdrawAmount;
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if (!this._isOpen) {
      throw new ValueError();
    } else {
      return this._balance;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

// Pricing class

export default class Pricing {
  /* eslint-disable no-underscore-dangle */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amnt) {
    if (typeof amnt !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amnt;
  }

  get currency() {
    return this._currency;
  }

  set currency(c) {
    if (typeof c !== 'string') {
      throw new TypeError('Currency must be string');
    }
    this._currency = c;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof conversionRate !== 'number' || typeof amount !== 'number') {
      throw new TypeError('Conversion rate and amount must be a number');
    }
    return amount * conversionRate;
  }
}

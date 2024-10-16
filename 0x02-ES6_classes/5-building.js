// Building class

export default class Building {
  /* eslint-disable no-underscore-dangle */
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sf) {
    if (typeof sf !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sf;
  }
}

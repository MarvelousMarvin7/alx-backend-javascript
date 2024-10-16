import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /* eslint-disable no-underscore-dangle */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(flrs) {
    if (typeof flrs !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = flrs;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

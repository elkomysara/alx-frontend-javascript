
export default class Airport {
  constructor(name, code) {
    this._name = name;  // Name of the airport
    this._code = code;  // Airport code
  }

  // Override toString method to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}

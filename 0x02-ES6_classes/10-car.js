
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  cloneCar() {
    // Create a symbol to generate a new instance with undefined properties
    const CarClone = this.constructor[Symbol.species] || this.constructor;
    return new CarClone();
  }
}

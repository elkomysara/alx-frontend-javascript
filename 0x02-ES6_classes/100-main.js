
import EVCar from './100-evcar.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1); // Should display EVCar object with all attributes

const ec2 = ec1.cloneCar(); // Should return an instance of Car, not EVCar
console.log(ec2); // Should display Car object

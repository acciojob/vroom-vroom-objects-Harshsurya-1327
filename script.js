// 1. Car Constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add getMakeModel to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// 2. SportsCar Constructor (inherits from Car)
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to initialize make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit from Car's prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

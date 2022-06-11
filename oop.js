// const auto1 = {
//   type: 'auto',
//   brand: 'bmw',
//   model: 'x5',
//   year: '2015',
//   changeTires() {
//     console.log('new tires');
//   }
// };

// const auto2 = {
//   type: 'auto',
//   brand: 'toyota',
//   model: 'corolla',
//   year: '2017',
//   changeTires() {
//     console.log('new tires');
//   }
// };

// const auto3 = {
//   type: 'auto',
//   brand: 'daewoo',
//   model: 'lanos',
//   year: '2015',
//   changeTires() {
//     console.log('new tires');
//   }
// };

/**
 * Option 1:
 * Classes
 */
class Car {
  constructor(brand, model, year, type = 'auto') {
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  changeTires() {
    console.log('new tires');
  }

  beep() {
    console.log('beep');
  }
}

class BMW extends Car {
  constructor(model, year, type = 'auto', brand = 'bmw') {
    super(brand, model, year, type);
  }

  autopilotOn() {
    console.log('autopilot on');
  }
}

/** 
 * Option 2:
 * Function constructor 
 * 
 * function Car(brand, model, year, type = 'auto') {
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  Car.prototype.changeTires = function () {
    console.log('new tires');
  };

  Car.prototype.beep = function () {
    console.log('beep');
  };
*/

const auto1 = new Car('bmw', 'x5', '2015'); // constructor()
const auto2 = new Car('toyota', 'corolla', '2015');
const auto3 = new Car('daewoo', 'lanos', '2015');

console.log(auto1);

// auto1.changeTires();

// auto3.beep();

// copilot

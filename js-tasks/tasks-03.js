// Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// Geometry Basics: Circle Circumference in 2D
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

// oop statement --for..in and for..of
function giveMeFive(obj) {
  let result = [];

  for (let key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  return result;
}

// Understanding closures - the basics
function buildFun(n) {
  var res = [];
  for (var i = 0; i < n; i++) {
    let val = i;
    res.push(function () {
      return val;
    });
  }
  return res;
}

// Fun with ES6 Classes #2 - Animals and Inheritance
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, "", "", status);
    this.legs = 0;
    this.species = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, "", "", status);
    this.legs = 4;
    this.species = "cat";
  }
  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, "", "", status);
    this.legs = 4;
    this.species = "dog";
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const c = new Cuboid({
    length: 4,
    width: 5,
    height: 5
  });

console.log("Test your volume and surfaceArea methods by uncommenting the logs below:")
console.log(c.volume()); // 100
console.log(c.surfaceArea()); // 130

//lol debug this as well

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

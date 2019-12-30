// Copy and paste your prototype in here and refactor into a class syntax
class CuboidMakerClass {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return ( 2 * (this.length * this.width + this.length * this.height +  this.width * this.height)
    );
  }
}

let cuboid1 = new CuboidMakerClass({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("a", cuboid1.volume()); // 100
console.log("b", cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMakerClass {
  constructor(childAttributes) {
    super(childAttributes);
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return  2 * (this.length * this.width + this.length * this.height +  this.width * this.height)
  }
}
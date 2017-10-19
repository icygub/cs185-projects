class Vector3d {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  //returns a new Vector3d
  add(otherVector) {
    return new Vector3d(this.x + otherVector.x, this.y + otherVector.y, this.z + otherVector.z);
  }

  //returns a new Vector3d
  scale(scalar) {
    return new Vector(scalar * this.x, scalar * this.y, scalar * this.z);
  }

  //returns a number
  dot(otherVector) {
    return this.x * otherVector.x + this.y * otherVector.y + this.z * otherVector.z;
  }

  //returns a number
  magnitude() {
    return Math.abs(Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z));
  }

  //returns a number
  direction() {
    var mag = magnitude();
    return (this.x / mag, this.y / mag, this.z / mag);
  }
}

var v1 = new Vector3d(1,2,3);
alert(v1.x);
var v2 = new Vector3d(4,5,6);
alert(v2.x);
var v3 = v1.add(v2);
alert(v3.x);

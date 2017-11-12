/**
John Diaz
*/

class CarMileage {

  constructor(make, model, odometer) {
    this._make = make;
    this._model = model;
		this.mpgList = [];
    this.odometerList = [];
    odometerList.push(0);
    mpgList.push(0);
  }

  getOdometer() {
    return odometerList[odometerList.length-1];
  }

  setOdometer(newOdometer) {
    odometerList.push(newOdometer);
  }

  getMpg() {
  	return mpgList[mpgList.length-1];
  }

  getSum(total, num) {
    return total + num;
  }

  fillUp(gallons, odometer) {
    mpgList.push(gallons);
    odometerList.push(odometer + getOdometer());
    //update odometer, gallons list
    //update odometer
    let lastGallon = mpgList[mpgList.length-1];
    let lastOdometer = odometerList[odometerList.length-1];
    return lastGallon / lastOdometer;
    //return miles per gallon for latest entry
  }

  average() {
    let totalGallons = mpgList.reduce(getSum)
    let totalOdometer = odometerList.reduce(getSum);
    return totalGallons / totalOdometer;

    //return average MPG for all entries
  }

  length() {
    return mpgList.length;
    //returns total number of entries in the list
  }
}

alert(1);

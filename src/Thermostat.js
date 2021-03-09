'use strict';

class Thermostat {
  constructor() {
  this.temperature = 20;
  this.MINIMUM_TEMP = 10;
  this.powerSavingOn();
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  up(number = 1) {
    if (this.temperature + number > this.MAXIMUM_TEMP) {
      this.temperature = this.MAXIMUM_TEMP;
      throw `Maximum temperature is ${this.MAXIMUM_TEMP} degrees`;
    } else {
      this.temperature += number;
    }
  }

  down(number = 1) {
    if (this.temperature - number < this.MINIMUM_TEMP) {
      this.temperature = this.MINIMUM_TEMP;
      throw 'Minimum temperature is 10 degrees';
    } else {
      this.temperature -= number;
    }
  }

  powerSavingOn() {
    this.MAXIMUM_TEMP = 25;
  }

};
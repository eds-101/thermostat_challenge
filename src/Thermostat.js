'use strict';

class Thermostat {
  constructor() {
  this.temperature = 20;
  this.MINIMUM_TEMP = 10;
  this.POWER_SAVING_ON_MAX_TEMP = 25
  this.POWER_SAVING_OFF_MAX_TEMP = 32
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
    this.MAXIMUM_TEMP = this.POWER_SAVING_ON_MAX_TEMP;
  }

  powerSavingOff() {
    this.MAXIMUM_TEMP = this.POWER_SAVING_OFF_MAX_TEMP;
  }

};
'use strict';

class Thermostat {
  constructor() {
  this.temperature = 20;
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  up(number = 1) {
    this.temperature += number;
  }
  down(number = 1) {
    this.temperature -= number;
  }

};
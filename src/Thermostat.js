'use strict';

class Thermostat {
  constructor() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMP = 10;
  this.POWER_SAVING_ON_MAX_TEMP = 25
  this.POWER_SAVING_OFF_MAX_TEMP = 32
  this.powerSavingOn();
  }

  getCurrentTemperature() {
    return this.temperature;
  }
  
  reset(){
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage(){
    return (this.temperature > 25) ? "high-usage"
          :(this.temperature < 18) ? "low-usage"
          :"medium-usage"
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
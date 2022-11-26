class Thermostat {
  constructor(F) {
    this._F = F;
  }

  get temperature() {
    return (5 / 9) * (this._F - 32);
  }

  set temperature(C) {
    this._F = (C * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

export class Clock {
  constructor(hour = 0, minute = 0) {
    this.hour = hour;
    this.minute = minute;
  }

  toString() {
    this.checkNegativeMinute();
    this.checkNegativeHour();

    let minuteString = "";
    if (this.minute < 10) {
      minuteString = `0${this.minute}`;
    } else if (this.minute >= 10 && this.minute < 60) {
      minuteString = `${this.minute}`;
    } else if (this.minute >= 60) {
      const rollOver = this.minute % 60;
      this.hour += Math.floor(this.minute / 60);
      if (rollOver < 10) {
        minuteString = `0${rollOver}`;
      } else {
        minuteString = `${rollOver}`;
      }
    }
    let hourString = "";
    if (this.hour < 10) {
      hourString = `0${this.hour}`;
    } else if (this.hour >= 10 && this.hour < 24) {
      hourString = `${this.hour}`;
    } else if (this.hour >= 24) {
      const rollOver = this.hour % 24;
      if (rollOver < 10) {
        hourString = `0${rollOver}`;
      } else {
        hourString = `${rollOver}`;
      }
    }

    return `${hourString}:${minuteString}`;
  }

  plus(minutes) {
    this.minute += minutes;
    return this;
  }

  minus(minutes) {
    this.minute -= minutes;
    return this;
  }

  equals(clock) {
    if (this.toString() === clock.toString()) {
      return true;
    } else {
      return false;
    }
  }

  checkNegativeHour() {
    if (this.hour < 0) {
      this.hour = 24 + (this.hour % 24);
    }
  }

  checkNegativeMinute() {
    if (this.minute < 0) {
      const hoursToSubtract = Math.floor(this.minute / 60);
      this.minute = this.minute === -60 ? 0 : 60 + (this.minute % 60);
      this.hour += hoursToSubtract;
    }
  }
}

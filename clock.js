export class Clock {
  constructor(hour = 0, minute = 0) {
    this.hour = hour
    this.minute = minute
  }

  toString() {
    let hourString = '';
    if (this.hour < 10) {
      hourString = `0${this.hour}`
    } else if (this.hour > 10 && this.hour < 24) {
      hourString = `${this.hour}`
    } else if (this.hour === 24) {
      hourString = '00'
    }

    let minuteString = '';
    if (this.minute < 10) {
      minuteString = `0${this.minute}`
    } else if (this.minute > 10 && this.minute < 60) {
      minuteString = `${this.minute}`
    } else if (this.minute === 60) {
      minuteString = '00'
    }
    return `${hourString}:${minuteString}`
  }

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}

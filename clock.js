export class Clock {
  constructor(hour) {
    this.hour = hour
  }

  toString() {
    return `0${this.hour}:00`
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

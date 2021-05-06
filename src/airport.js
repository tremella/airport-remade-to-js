'use strict';

class Airport {
  constructor(capacity = 1, weather = ((new Weather).isStormy())) {
    this.hangar = []
    this.capacity = capacity
    this.isStormy = weather
  }
  land(plane){
    if (this.hangar.length >= this.capacity) {
      throw Error('airport full');
    } else if (this.isStormy === true) {
      throw Error('too dangerous to land');
    } else {
      this.hangar.push(plane);
    }
  }
  launch(plane){
    if (this.isStormy === true) {
      throw Error('too dangerous to launch');
    } else {
      this.hangar.pop(plane);
    }
  }
}

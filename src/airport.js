'use strict';

class Airport {
  constructor(capacity = 1) {
    this.hangar = []
    this.capacity = capacity
  }
  land(plane){
    if (this.hangar.length >= this.capacity) {
      throw Error('airport full');
    } else {
      this.hangar.push(plane);
    }
  }
  launch(plane){
    this.hangar.pop(plane);
  }
}

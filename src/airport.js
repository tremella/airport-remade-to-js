'use strict';

class Airport {
  constructor() {
    this.hangar = []
    this.capacity = 1
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

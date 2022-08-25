import { Injectable } from '@angular/core';

@Injectable()
export class NameSeterService {
  constructor() {}

  setName(value) {
    console.log(value);
    //this.app.name = value;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  errorMessage: string = '';
  calcHistoric: string[] = [];
  result: number;

  constructor() {}

  calculate(firstNumber, secondNumber, operator) {
    const currentTime = new Date().toLocaleTimeString();

    if (operator === '/' && secondNumber === '0') {
      this.logError('Division by 0 (please review your basics divisions)');
    } else {
      this.result = eval(firstNumber + operator + secondNumber);
      let log =
        firstNumber +
        operator +
        secondNumber +
        '=' +
        this.result +
        '  Done at ' +
        currentTime;
      this.logError('');

      this.logCalc(log);
    }
  }

  logError(error: string) {
    this.errorMessage = error;
  }

  logCalc(log: string) {
    this.calcHistoric.unshift(log);
  }

  deleteLog(index: number) {
    this.calcHistoric.splice(index, 1); // 2nd parameter means remove one item only
  }

  clear() {
    this.calcHistoric = [];
  }
}

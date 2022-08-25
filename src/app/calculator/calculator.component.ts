import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  /*firstNumber;
  secondNumber;
  operator;*/

  constructor(public calculatorService: CalculatorService) {}

  ngOnInit() {}

  calculate(firstNumber, secondNumber, operator) {
    if (!firstNumber.length || !secondNumber.length) {
      //console.log('empty');
      this.calculatorService.logError('One of the two fields is empty');
    } else if (isNaN(firstNumber) || isNaN(secondNumber)) {
      //console.log('NaN');
      this.calculatorService.logError('One of the two fields is not a number');
    } else {
      //console.log('CALC');
      this.calculatorService.logError('');
      this.calculatorService.calculate(firstNumber, secondNumber, operator);
    }
  }

  deleteLog(index: number) {
    this.calculatorService.deleteLog(index);
  }
}

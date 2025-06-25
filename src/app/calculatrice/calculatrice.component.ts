import {
  Component,
  ElementRef,
  NgModuleRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-calculatrice',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css',
})
export class CalculatriceComponent implements OnInit {
  element = <HTMLElement>document.getElementById('element');
  tableau_operations: String[] = ['+', '-', '/', '*'];
  tableau_numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  /*operation: String = '+';
  number1: number = 0;
  number2: number = 0;
  result: number = 0;*/
  operation: String = '+';
  number1: number = 0;
  number2: number = 0;
  result: number = 0;
  negative: String = '';

  text_result: String = 'Result : ';

  formGroup!: FormGroup;
  isNegative!: Boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      number1: this.number1,
      number2: this.number2,
      operation: this.operation,
    });
  }

  /* avec ngModel :
  calculate() {
    if (this.formGroup.valid) {
   
      if (this.operation === '+') {
        this.result = this.number1 + this.number2;
        this.text_result = 'Result : ';
        console.log(this.result);
      }
      if (this.operation === '-') {
        this.result = this.number1 - this.number2;
        this.text_result = 'Result : ';
        console.log(this.result);
      }
      if (this.operation === '/') {
        this.result = this.number1 / this.number2;
        this.text_result = 'Result : ';
        if (this.number2 === 0) {
          this.text_result = 'Invalid operation : ';
        }
        console.log(this.result);
      }
      if (this.operation === '*') {
        this.result = this.number1 * this.number2;
        this.text_result = 'Result : ';
        console.log(this.result);
      }
    }
  }*/
  calculate() {
    console.log(this.formGroup.value.number1);
    console.log(this.formGroup.value.number2);
    console.log(this.formGroup.value.operation);

    if (this.formGroup.valid) {
      if (this.formGroup.value.operation === '+') {
        this.result =
          this.formGroup.value.number1 + this.formGroup.value.number2;
        this.text_result = 'Result : ';
        const isNegative = this.result.toString().startsWith('-');
        console.log(this.result);
      }
    }
    if (this.formGroup.value.operation === '-') {
      this.result = this.formGroup.value.number1 - this.formGroup.value.number2;
      const isNegative = this.result.toString().startsWith('-');
      this.text_result = 'Result : ';
      console.log(this.result);
    }
    if (this.formGroup.value.operation === '/') {
      this.result = this.formGroup.value.number1 / this.formGroup.value.number2;

      this.text_result = 'Result : ';
      if (this.formGroup.value.number2 === 0) {
        this.text_result = 'Invalid operation : ';
      }
      console.log(this.result);
    }
    if (this.formGroup.value.operation === '*') {
      this.result = this.formGroup.value.number1 * this.formGroup.value.number2;
      this.text_result = 'Result : ';
      console.log(this.result);
    }
  }
}

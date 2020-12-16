import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ERROR_MESSAGE } from './error-message';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent implements OnInit {

  @Input() control:FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  shouldShowError(): boolean {
    return this.control && this.control.touched && !!this.control.errors;
  }

  listOfErrors(): string[] {
    // return Object.keys(this.control.errors); // [required,zipCode]
    // [this field is required, allowed pincode is 123456]
    return Object.keys(this.control.errors)
    .map((error)=>ERROR_MESSAGE[error](this.control.getError(error)));
  }


}

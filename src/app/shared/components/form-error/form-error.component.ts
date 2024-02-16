import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {

  @Input()
  control!: AbstractControl|null;

  get errors(): ValidationErrors|null|undefined{
    return this.control?.errors;
  } 

  constructor() { }

  ngOnInit(): void {
  }

}

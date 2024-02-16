import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HasForm } from 'src/app/core/interfaces/has-form';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, HasForm {

  fg!: FormGroup<any>;
  
  constructor() { }
  
  ngOnInit(): void {
  }

}

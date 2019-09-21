import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl} from '@angular/forms';
import {Item} from '../item';
 
@Component({
  selector: 'app-db-input',
  templateUrl: './db-input.component.html',
  styleUrls: ['./db-input.component.sass']
})
export class DbInputComponent   {
  isSubmitted = false;
  myForm: FormGroup;
  name: AbstractControl;
  isComplete: AbstractControl;
  constructor(public fb: FormBuilder ) {
    this.myForm = this.fb.group({
      'name': ['', [Validators.required]],
      'isComplete': ['']
    })
    this.name = this.myForm.controls['name'].value
    this.isComplete = this.myForm.controls['isComplete'].value;
   }

  submitForm(form: any) {
    this.isSubmitted = true;

  }

}

import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../user/email-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User();

  userForm = this.fb.group({
    username:  [''],
    credentials : this.fb.group({
    email: ['', [Validators.required, emailValidator]]
  }),
    password: [''],
    street: [''],
    number: [''],
    postcode: [''],
    city: ['']
  });

  constructor( private fb: FormBuilder ) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.userForm.value);
  }
}

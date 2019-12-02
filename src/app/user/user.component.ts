import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User();

  userForm = new FormGroup({
    username: new FormControl(''),
    credentials : new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    }),
    street: new FormControl(''),
    number: new FormControl(''),
    postcode: new FormControl(''),
    city: new FormControl('')
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.userForm.value);
  }
}

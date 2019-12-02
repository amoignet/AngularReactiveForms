import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
user = new User();

username = new FormControl('');
email = new FormControl('');
password = new FormControl('');
street = new FormControl('');
number = new FormControl('');
postcode = new FormControl('');
city = new FormControl('');


constructor() { }

ngOnInit() {
  }

signIn() {
  this.user = {
    username : this.username.value,
    email : this.email.value,
    password : this.password.value,
    street : this.city.value,
    number : this.number.value,
    postcode : this.postcode.value,
    city : this.city.value
  };

}
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl(
      '', [
      Validators.required,
      Validators.minLength(7)
    ])
  });
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
}

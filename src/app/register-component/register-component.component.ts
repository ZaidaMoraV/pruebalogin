import { Component } from '@angular/core';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['../styles.css']
})
export class RegisterComponentComponent {

  email: string | undefined;
  password!: string;
  confirmPassword!: string;

  constructor() {}

  register(){
    console.log(this.email);
    console.log(this.password);

  }
}

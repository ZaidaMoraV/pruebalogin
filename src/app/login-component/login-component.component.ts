import { Component } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['../styles.css']
})

export class LoginComponentComponent {
  
  email: string | undefined;
  password!: string;
  
  constructor(public UsersService: UsersService) {}

  login() {
    const user = {email: this.email, password: this.password};
    this.UsersService.login(user).subscribe( (data: any) => {
      console.log(data);
    });
  }
}
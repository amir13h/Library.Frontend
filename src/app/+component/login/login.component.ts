import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Login } from './model/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  message:string='';
  login: Login = {
    email: '',
    password: '',
  }
  router=inject(Router);
  check() {
    if (this.login.email=='admin'&&this.login.password=='admin') {
      this.router.navigateByUrl('/admin')
    }
    else{
      this.message='ایمیل یا پسورد اشتباه است'
    }
  }

}

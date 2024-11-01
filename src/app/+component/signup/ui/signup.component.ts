import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Signup } from '../model/signup';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  http = inject(HttpClient);
  router = inject(Router);
  data: any[] = [];
  ngOnInit(): void {

  }
  message: string = '';
  signup: Signup = {
    email: '',
    password: '',
    phone:''
  }
  check() {
    if (this.signup.email != '' && this.signup.password != '' && this.signup.phone != '') {
      this.http.post('http://localhost:5026/usernameandpassword/add', this.signup).subscribe(res => {
        this.data = res as any[];
      })
    }
    else{
       this.message='فیلد های بالا را کامل کنید'
     }
     this.router.navigateByUrl('/')
  }

}

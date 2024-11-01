import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Pas } from './model/admin';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  check = '';
  http = inject(HttpClient);
  pasData: any[] = [];
  bookData: any[] = [];
  memberData: any[] = [];
  clickPas() {
    this.check = 'pas'
    this.http.get('http://localhost:5026/usernameandpassword/list').subscribe(res => {
      this.pasData = res as any[];
    });
  }
  clickBook() {
    this.check = 'book'
    this.http.get('http://localhost:5026/books/list').subscribe(res => {
      this.bookData = res as any[];
    });
  }
  clickMember() {
    this.check = 'member'
    this.http.get('http://localhost:5026/members/list').subscribe(res => {
      this.memberData = res as any[];
    });
  }



}

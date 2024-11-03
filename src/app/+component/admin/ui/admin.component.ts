import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { book, member, pas } from '../models/admin';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {
    this.clickPas();
  }
  pas: pas = {
    id: 0,
    email: '',
    password: '',
    phone: ''
  };
  book: book = {
    id: 0,
    pages: 0,
    price: 0,
    title: ''
  }
  member: member = {
    id: 0,
    age: 0,
    name: '',
    phone: ''
  }
  edit = '';
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
  exit() {
    this.edit = '';
  }
  update() {
    this.http.post('http://localhost:5026/usernameandpassword/update', this.pas).subscribe(res => {
      this.pasData = res as any[];
      this.edit = '';
      this.clickPas();
    });
  }
  editClick(item: any) {
    this.edit = 'pas';
    this.pas = item;
  }
  editBook(item: any) {
    this.edit = 'book';
    this.book = item;
  }
  updateBook() {
    this.http.post('http://localhost:5026/books/update', this.book).subscribe(res => {
      this.bookData = res as any[];
      this.edit = '';
      this.clickBook();
    });
  }
  updateMember() {
    this.http.post('http://localhost:5026/members/update', this.member).subscribe(res => {
      this.memberData = res as any[];
      this.edit = '';
      this.clickMember();
    });
  }
  editMember(item: any) {
    this.edit = 'member';
    this.member = item;
  }
  removeMember(item: any) {
    this.http.post(`http://localhost:5026/members/remove/${item.id}`,item ).subscribe();
    this.clickMember();

  }
  removeBook(item: any) {
    this.http.post(`http://localhost:5026/books/remove/${item.id}`,item ).subscribe();
    this.clickBook();
  }
  removePas(item: any) {
    this.http.post(`http://localhost:5026/usernameandpassword/remove/${item.id}`,item ).subscribe();
    this.clickPas();
  }
    addBook() {
    this.edit='addBook'
    }
    addBooks() {
      this.http.post('http://localhost:5026/books/add', this.book).subscribe(res => {
        this.bookData = res as any[];
        this.edit = '';
        this.clickBook();
      });
    }
    addMember() {
    this.edit='addMember'
    }
    addMembers() {
      this.http.post('http://localhost:5026/members/add', this.member).subscribe(res => {
        this.memberData = res as any[];
        this.edit = '';
        this.clickMember();
      });
      }
}

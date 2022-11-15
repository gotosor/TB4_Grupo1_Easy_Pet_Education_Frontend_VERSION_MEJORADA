import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: string = '';
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.change.subscribe((user) => {
      this.user = user;
    });
  }
  login() {
    this.router.navigate(['/auth']);
  }
  logout() {
    this.auth.logout();
  }
  modify() {
    this.router.navigate(['/adminview']);
  }
  inicio() {
    this.router.navigate(['/']);
  }
  mascotas() {
    this.router.navigate(['/mascotas']);
  }
  nosotros() {
    this.router.navigate(['/nosotros']);
  }
  veterinarias() {
    this.router.navigate(['/veterinarias']);
  }
  contacto() {
    this.router.navigate(['/contacto']);
  }
}

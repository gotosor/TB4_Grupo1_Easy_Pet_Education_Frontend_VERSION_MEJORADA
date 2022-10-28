import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Output() change: EventEmitter<string> = new EventEmitter();
  constructor(private router: Router, private http: HttpClient) {}

  login(usuario: any) {
    this.change.emit(usuario.usuario);
    localStorage.setItem('username', usuario.usuario);
    this.router.navigate(['/']);
  }
  logout() {
    this.change.emit('');
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }
  inicio() {
    return this.http.get<any>(`${environment.urlApi}inicio`);
  }
}

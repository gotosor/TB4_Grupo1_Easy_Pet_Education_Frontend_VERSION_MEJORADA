import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Output() change: EventEmitter<string> = new EventEmitter();
  constructor(
    private router: Router,
    private http: HttpClient,
    private toast: ToastrService
  ) {}

  login(usuario: any) {
    return this.http
      .post<any>(`${environment.urlApi}usuarios/login`, usuario)
      .pipe(
        tap((data) => {
          console.log(data);
          if (data) {
            localStorage.setItem('username', usuario.nombreCompleto);
            this.change.emit(data.nombreCompleto);
            this.router.navigate(['/']);
          } else {
            this.toast.error('Usuario y clave erróneas.');
          }
        })
      );
  }
  logout() {
    this.change.emit('');
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }
  inicio() {
    return this.http.get<any>(`${environment.urlApi}informacion`);
  }
}

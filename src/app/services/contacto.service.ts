import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor(private http: HttpClient) {}

  guardarContacto(contacto: any) {
    return this.http.post<any>(`${environment.urlApi}contacto`, contacto);
  }
}

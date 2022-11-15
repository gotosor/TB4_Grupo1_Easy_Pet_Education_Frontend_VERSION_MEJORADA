import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TipoMascotasService {
  constructor(private http: HttpClient) {}
  traerDatosMascotas() {
    return this.http.get<any>(`${environment.urlApi}mascotas`);
  }
  traerMascotas(id: number) {
    return this.http.get<any>(`${environment.urlApi}mascotas/aprende/${id}`);
  }
  traerDatosMascotasById(id: number) {
    return this.http.get<any>(`${environment.urlApi}mascotas/aprende/${id}`);
  }
  editarDatosMascotasById(id: number, data: any) {
    return this.http.put<any>(`${environment.urlApi}mascotas/${id}`, data);
  }
}

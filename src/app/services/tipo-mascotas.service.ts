import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TipoMascotasService {
  constructor(private http: HttpClient) {}
  traerMascotas() {
    return this.http.get<any>(`${environment.urlApi}mascotas`);
  }
  traerDatosMascotas() {
    return this.http.get<any>(`${environment.urlApi}datosMascota`);
  }
  traerDatosMascotasById(id: number) {
    return this.http.get<any>(`${environment.urlApi}datosMascota?id=${id}`);
  }
  editarDatosMascotasById(id: number, data: any) {
    return this.http.put<any>(`${environment.urlApi}datosMascota/${id}`, data);
  }
}

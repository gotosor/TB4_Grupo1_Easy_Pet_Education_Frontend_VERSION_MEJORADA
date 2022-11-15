import { Component, OnInit } from '@angular/core';
import { TipoMascotasService } from '../services/tipo-mascotas.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss'],
})
export class MascotasComponent implements OnInit {
  data: any[] = [];
  seleccion: any;
  constructor(private mascotasSvc: TipoMascotasService) {}

  ngOnInit(): void {
    this.mascotasSvc.traerDatosMascotas().subscribe((element) => {
      this.data = element;
      this.seleccion = this.data[0];
    });
  }
  cambiarTipo(event: any) {
    this.seleccion = this.data.filter(
      (element) => element.mascotaId == event.target.value
    )[0];
  }
}

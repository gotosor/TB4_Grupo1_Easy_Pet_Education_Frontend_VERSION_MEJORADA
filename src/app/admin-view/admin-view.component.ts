import { Component, OnInit } from '@angular/core';
import { TipoMascotasService } from '../services/tipo-mascotas.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
})
export class AdminViewComponent implements OnInit {
  id: number = 0;
  constructor(private mascotasSvc: TipoMascotasService) {}

  ngOnInit(): void {}
  buscarDatos(event: any) {
    this.mascotasSvc.traerDatosMascotasById(event).subscribe((ele) => {
      this.id = ele;
    });
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TipoMascotasService } from 'src/app/services/tipo-mascotas.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output('cambioTipo') cambioTipo: EventEmitter<number> =
    new EventEmitter<number>();
  menuItem: any;
  constructor(private mascotasSvc: TipoMascotasService) {}

  ngOnInit(): void {
    this.mascotasSvc.traerDatosMascotas().subscribe((element) => {
      this.menuItem = element;
    });
  }
  cambiarTipoMacota(id: number) {
    this.cambioTipo.emit(id);
  }
}

import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoMascotasService } from 'src/app/services/tipo-mascotas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input('idMascotas') idMascotas: number = 0;
  menuForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mascotas: TipoMascotasService,
    private toast: ToastrService
  ) {
    this.menuForm = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required]],
      imagenCmb: ['', [Validators.required]],
      imagenAli: ['', [Validators.required]],
      imagenHig: ['', [Validators.required]],
      imagenRep: ['', [Validators.required]],
      textoAli: ['', [Validators.required]],
      textoHig: ['', [Validators.required]],
      textoRep: ['', [Validators.required]],
      videoIzq: ['', [Validators.required]],
      videoCent: ['', [Validators.required]],
      videoDere: ['', [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['idMascotas'].firstChange) {
      this.menuForm.patchValue({
        id: changes['idMascotas'].currentValue[0].id,
        nombre: changes['idMascotas'].currentValue[0].nombre,
        imagenCmb: changes['idMascotas'].currentValue[0].imagenCmb,
        imagenAli: changes['idMascotas'].currentValue[0].imagenAli,
        imagenHig: changes['idMascotas'].currentValue[0].imagenHig,
        imagenRep: changes['idMascotas'].currentValue[0].imagenRep,
        textoAli: changes['idMascotas'].currentValue[0].textoAli,
        textoHig: changes['idMascotas'].currentValue[0].textoHig,
        textoRep: changes['idMascotas'].currentValue[0].textoRep,
        videoIzq: changes['idMascotas'].currentValue[0].videoIzq,
        videoCent: changes['idMascotas'].currentValue[0].videoCent,
        videoDere: changes['idMascotas'].currentValue[0].videoDere,
      });
    }
  }

  ngOnInit(): void {}
  editarDatosMascotasById() {
    this.mascotas
      .editarDatosMascotasById(this.menuForm.value.id, this.menuForm.value)
      .subscribe((ele) => {
        if (ele) {
          this.toast.success('Registro modificado correctamente.');
        } else {
          this.toast.error('Registro no se pudo modificar.');
        }
      });
  }
}

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
      mascotaId: [''],
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
        mascotaId: changes['idMascotas'].currentValue.mascotaId,
        nombre: changes['idMascotas'].currentValue.nombre,
        imagenCmb: changes['idMascotas'].currentValue.imagenCmb,
        imagenAli: changes['idMascotas'].currentValue.imagenAli,
        imagenHig: changes['idMascotas'].currentValue.imagenHig,
        imagenRep: changes['idMascotas'].currentValue.imagenRep,
        textoAli: changes['idMascotas'].currentValue.textoAli,
        textoHig: changes['idMascotas'].currentValue.textoHig,
        textoRep: changes['idMascotas'].currentValue.textoRep,
        videoIzq: changes['idMascotas'].currentValue.videoIzq,
        videoCent: changes['idMascotas'].currentValue.videoCent,
        videoDere: changes['idMascotas'].currentValue.videoDere,
      });
    }
  }

  ngOnInit(): void {}
  editarDatosMascotasById() {
    this.mascotas
      .editarDatosMascotasById(
        this.menuForm.value.mascotaId,
        this.menuForm.value
      )
      .subscribe((ele) => {
        if (ele) {
          this.toast.success('Registro modificado correctamente.');
        } else {
          this.toast.error('Registro no se pudo modificar.');
        }
      });
  }
}

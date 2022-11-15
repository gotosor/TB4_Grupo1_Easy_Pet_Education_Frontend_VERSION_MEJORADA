import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  contactoForm!: FormGroup;
  constructor(private fb: FormBuilder, private contactoSvc: ContactoService) {}

  ngOnInit(): void {
    this.contactoForm = this.fb.group({
      contactoId: [null, [Validators.required]],
      nombreCompleto: [null, [Validators.required]],
      numeroCelular: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      texto: [null, [Validators.required]],
    });
  }
  save() {
    this.contactoSvc.guardarContacto(this.contactoForm.value).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
}

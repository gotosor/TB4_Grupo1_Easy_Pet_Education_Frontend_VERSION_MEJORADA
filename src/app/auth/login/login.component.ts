import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario: any = {
    usuario: 'admin',
    clave: 'admin',
  };
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private auth: AuthService
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      clave: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  login() {
    if (this.loginForm.valid) {
      if (
        this.usuario.usuario === this.loginForm.value.usuario &&
        this.usuario.clave === this.loginForm.value.clave
      ) {
        this.toast.success(
          'Bienvenido usuario ' + this.loginForm.value.usuario
        );
        this.auth.login(this.loginForm.value);
      } else {
        this.toast.error('Usuario y clave erróneas.');
      }
    } else {
      this.loginForm.markAllAsTouched();
      this.toast.error('Complete todos los campos.');
    }
  }
}

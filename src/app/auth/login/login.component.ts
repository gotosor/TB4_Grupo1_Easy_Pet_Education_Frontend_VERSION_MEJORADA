import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private auth: AuthService
  ) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  login() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (data) => {
          if (data) {
            this.toast.success('Bienvenido usuario ' + data.nombreCompleto);
            this.auth.login(this.loginForm.value);
          }
        },
        (err) => this.toast.error('ERROR: ' + err)
      );
    } else {
      this.loginForm.markAllAsTouched();
      this.toast.error('Complete todos los campos.');
    }
  }
}

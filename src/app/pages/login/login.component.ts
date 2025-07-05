import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  mensaje = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contrasenia: ['', Validators.required]
    });
  }

  login() {
    if (this.form.invalid) {
      this.mensaje = 'Faltan completar campos';
      return;
    }

    this.authService.login(this.form.value).subscribe({
      next: () => {
        this.mensaje = 'Login exitoso';
        this.router.navigate(['/productos']);
      },
      error: err => {
        this.mensaje = err.error?.message || 'Error al iniciar sesión';
      }
    });
  }
}

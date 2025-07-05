import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  form;

  mensaje = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasenia: ['', Validators.required],
      direccion: ['']
    });
  }

  registrar() {
    if (this.form.invalid) {
      this.mensaje = 'Faltan completar campos';
      return;
    }

    this.authService.registrar(this.form.value).subscribe({
      next: () => this.mensaje = '¡Registrado con éxito!',
      error: err => this.mensaje = err.error?.message || 'Error al registrar'
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
 nombre = '';
  email = '';
  contrasenia = '';
  apellido = '';
  direccion = '';
  mensaje = '';

  constructor(private http: HttpClient) {}

  registrar() {
    const datos = { email: this.email, nombre: this.nombre, contrasenia: this.contrasenia, apellido: this.apellido, direccion: this.direccion };

    this.http.post('http://localhost:3000/api/users/registro', datos).subscribe({
      next: res => this.mensaje = '¡Registrado con éxito!',
      error: err => this.mensaje = err.error?.message || 'Error al registrar'
    });
  }


}

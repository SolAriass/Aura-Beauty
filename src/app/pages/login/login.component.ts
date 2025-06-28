import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   email = '';
  contrasenia = '';
  mensaje = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const datos = { email: this.email, contrasenia: this.contrasenia };

    this.http.post('http://localhost:3000/api/users/login', datos).subscribe({
      next: res => {
        this.mensaje = 'Login exitoso';
        this.router.navigate(['/productos']);
      },
      error: err => {
        this.mensaje = err.error?.message || 'Error de login';
      }
    });
  }

}

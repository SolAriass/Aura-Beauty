import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  direccion: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  obtenerPerfil(): Observable<Usuario> {
    const usuarioStr = localStorage.getItem('usuario');

    if (!usuarioStr) {
      console.error('No hay usuario en localStorage');
      return throwError(() => new Error('Usuario no encontrado'));
    }

    const usuario = JSON.parse(usuarioStr);
    const id = usuario.id;

    if (!id) {
      console.error('El usuario no tiene ID');
      return throwError(() => new Error('ID de usuario no válido'));
    }

    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }
}

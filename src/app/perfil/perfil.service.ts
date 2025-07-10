import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    const id = localStorage.getItem('usuarioId');
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }
}

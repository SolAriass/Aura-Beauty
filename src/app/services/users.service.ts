import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Usuario {
  id: number;
  nombre: String;
  apellido: String;
  email: String;
  direccion: String;
}


@Injectable({ providedIn: 'root' })

export class UsuarioService {
  private api = 'http://localhost:3000/api/usuario';

  constructor(private http: HttpClient) {}

  obtenerPerfil() {
    return this.http.get(`${this.api}/perfil`, {
      withCredentials: true
    });
  }
}

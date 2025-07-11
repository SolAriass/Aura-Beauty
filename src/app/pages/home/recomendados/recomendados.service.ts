import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Producto {
  id: number;
  nombre: String;
  descripcion: String;
  idGenero: number;
  precio: number;
  url: String;
}

@Injectable({
  providedIn: 'root'
})
export class RecomendadosService {
  private apiUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Producto[]> {
      return this.http.get<Producto[]>(this.apiUrl);
    }
}

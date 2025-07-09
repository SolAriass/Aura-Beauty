import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  marca: string;
  descripcion: string;
  url: string;
  idGenero: number;
  idCategoria: number;
  precio: number;
}
@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
  private apiUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
      return this.http.get<Producto[]>(this.apiUrl);
  }
}

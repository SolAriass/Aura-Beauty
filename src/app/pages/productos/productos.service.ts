import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;
  nombre: String;
  descripcion: String;
  idGenero: number;
  precio: number;
  url: String;
}
export interface Categoria {
  id: number;
  nombre: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getProductoPorId(id: string) {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }
  obtenerCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiUrl}/categorias`);
  }
  obtenerProductosConFiltros(filtros: { nombre?: string; precio?: string; categoria?: string }): Observable<Producto[]> {
    const params = new URLSearchParams();

    if (filtros.nombre) params.append('nombre', filtros.nombre);
    if (filtros.precio) params.append('precio', filtros.precio);
    if (filtros.categoria) params.append('categoria', filtros.categoria);

    return this.http.get<Producto[]>(`${this.apiUrl}?${params.toString()}`);
  }
}

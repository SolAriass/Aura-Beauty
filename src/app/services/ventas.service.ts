import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface VentaDetalle {
  producto: {
    id: number;
    precio: number;
  };
  cantidad: number;
}

export interface Venta {
  usuarioId: number;
  carrito: VentaDetalle[];
}

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private apiUrl = 'http://localhost:3000/api/ventas';

  constructor(private http: HttpClient) {}

  finalizarCompra(venta: Venta): Observable<any> {
    return this.http.post(this.apiUrl, venta);
  }

getVentasPorUsuario(usuarioId: number): Observable<any> {
  return this.http.get(`http://localhost:3000/api/ventas/${usuarioId}`);
}



}

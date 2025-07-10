import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../productos.service';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {
  private apiUrl = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

}

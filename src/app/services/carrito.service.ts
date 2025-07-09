import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../pages/productos/productos.service';

export interface CarritoItem {
  producto: Producto;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: CarritoItem[] = [];


  private carritoSubject = new BehaviorSubject<CarritoItem[]>([]);
  carrito$ = this.carritoSubject.asObservable();


  agregarProducto(producto: Producto) {
    const existe = this.carrito.find(item => item.producto.id === producto.id);

    if (existe) {
      existe.cantidad++;
    } else {
      this.carrito.push({ producto, cantidad: 1 });
    }

    this.carritoSubject.next(this.carrito);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }


  obtenerTotal(): number {
    return this.carrito.reduce(
      (total, item) => total + item.producto.precio * item.cantidad,
      0
    );
  }


  obtenerCarrito(): CarritoItem[] {
     const carritoGuardado = localStorage.getItem('carrito');

  if (carritoGuardado) {
    this.carrito = JSON.parse(carritoGuardado);
    this.carritoSubject.next(this.carrito);
  }
    return this.carrito;
  }


  vaciarCarrito() {
    this.carrito = [];
    this.carritoSubject.next(this.carrito);
    localStorage.removeItem('carrito');
  }

  actualizarCarrito(nuevoCarrito: CarritoItem[]) {
  this.carrito = nuevoCarrito;
  this.carritoSubject.next(this.carrito);
  localStorage.setItem('carrito', JSON.stringify(this.carrito));
}


}

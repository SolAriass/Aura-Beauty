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

  // Esto permite a otros componentes "escuchar" los cambios en el carrito
  private carritoSubject = new BehaviorSubject<CarritoItem[]>([]);
  carrito$ = this.carritoSubject.asObservable();

  // Método para agregar un producto al carrito
  agregarProducto(producto: Producto) {
    const existe = this.carrito.find(item => item.producto.id === producto.id);

    if (existe) {
      existe.cantidad++; // si ya estaba, le sumo cantidad
    } else {
      this.carrito.push({ producto, cantidad: 1 }); // si no estaba, lo agrego
    }
    // Avisamos a los que estén "escuchando" que el carrito cambió
    this.carritoSubject.next(this.carrito);
  }

  // Obtener el total de la compra
  obtenerTotal(): number {
    return this.carrito.reduce(
      (total, item) => total + item.producto.precio * item.cantidad,
      0
    );
  }

  // Devuelve los productos
  obtenerCarrito(): CarritoItem[] {
    return this.carrito;
  }

  // Limpia el carrito
  vaciarCarrito() {
    this.carrito = [];
    this.carritoSubject.next(this.carrito);
  }

  actualizarCarrito(nuevoCarrito: CarritoItem[]) {
  this.carrito = nuevoCarrito;
  this.carritoSubject.next(this.carrito);
}


}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService, Producto } from './productos.service';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';
import { CarritoComponent } from "../carrito/carrito.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-productos',
  imports: [CommonModule, FormsModule, CarritoComponent, RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent  implements OnInit{

    productos: Producto[] = [];

  constructor(private productosService: ProductosService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error:', err)
    });
  }

  agregarAlCarrito(producto: Producto) {
  this.carritoService.agregarProducto(producto);
}


}





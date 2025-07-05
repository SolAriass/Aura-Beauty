import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService, Producto } from './productos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent  implements OnInit{

    productos: Producto[] = [];
  nuevo: Producto = { nombre: '', precio: 0 };

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productosService.obtenerProductos().subscribe(data => {
      this.productos = data;
    });
  }

  crearProducto(): void {
    this.productosService.crearProducto(this.nuevo).subscribe(() => {
      this.nuevo = { nombre: '', precio: 0 };
      this.cargarProductos();
    });
  }
}





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

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error:', err)
    });
  }

}





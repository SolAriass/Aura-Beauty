import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

    productos = [
    { nombre: 'Mujercitas', precio: 17000 },
    { nombre: 'La Vie E Belle', precio: 230000 },
    { nombre: 'Icon', precio: 38000 }
  ];
}

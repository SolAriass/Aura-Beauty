import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService, Producto, Categoria } from './productos.service';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';
import { CarritoComponent } from "../carrito/carrito.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, CarritoComponent, RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
  categorias: Categoria[] = []; // ahora correctamente tipado
  categoriaSeleccionada: string = ''; // siempre string para evitar conflictos con ngModel

  constructor(
    private productosService: ProductosService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    const filtrosGuardados = localStorage.getItem('filtros');
    const filtros = filtrosGuardados ? JSON.parse(filtrosGuardados) : {};
    this.cargarProductos(filtros);

    this.categoriaSeleccionada = filtros.categoria || '';
    this.cargarProductos(filtros);



    this.productosService.obtenerCategorias().subscribe({
      next: (data) => this.categorias = data,
      error: (err) => console.error('Error al obtener categorías:', err)
    });
  }

  cargarProductos(filtros: { nombre?: string; precio?: string; categoria?: string } = {}) {
    localStorage.setItem('filtros', JSON.stringify(filtros));

    const filtrosLimpiados: any = {};

    if (filtros.nombre) filtrosLimpiados.nombre = filtros.nombre;
    if (filtros.precio) filtrosLimpiados.precio = filtros.precio;

    // Solo agregamos filtro si hay categoría seleccionada
    if (filtros.categoria && filtros.categoria !== '') {
      filtrosLimpiados.categoria = filtros.categoria;
    }

    this.productosService.obtenerProductosConFiltros(filtrosLimpiados).subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error al cargar productos:', err)
    });
  }

  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarProducto(producto);
  }

  filtrarPrecioAsc() {
    this.cargarProductos({ precio: 'asc', categoria: this.categoriaSeleccionada });
  }

  filtrarPrecioDesc() {
    this.cargarProductos({ precio: 'desc', categoria: this.categoriaSeleccionada });
  }

  filtrarPorNombre() {
    const nombre = prompt("Ingrese nombre a buscar:");
    if (nombre) {
      this.cargarProductos({ nombre, categoria: this.categoriaSeleccionada });
    }
  }

  onCategoriaChange() {
    this.cargarProductos({ categoria: this.categoriaSeleccionada });
  }
}

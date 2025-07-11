import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService, Producto, Categoria } from './productos.service';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';
import { CarritoComponent } from "../carrito/carrito.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, CarritoComponent, RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  estadoBotones: Record<number, boolean> = {};
  nombreBuscado: string = '';
  productos: Producto[] = [];
  categorias: Categoria[] = [];
  categoriaSeleccionada: string = '';
  categoriaNombre: string = '';


  constructor(
    private productosService: ProductosService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    const filtrosGuardados = localStorage.getItem('filtros');
    const filtros = filtrosGuardados ? JSON.parse(filtrosGuardados) : {};
    this.nombreBuscado = filtros.nombre || '';

    this.productosService.obtenerProductosConFiltros(filtros).subscribe({
      next: (data) => {
        this.productos = data.map(p => ({ ...p, agregado: false }));
      },
      error: (err) => console.error('Error al cargar productos:', err)
    });

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

    // Actualizamos la categoría seleccionada
    if (filtros.categoria === '1') {
      this.categoriaNombre = 'Perfumes';
      this.nombreBuscado = '';
    } else if (filtros.categoria === '2') {
      this.categoriaNombre = 'Maquillaje';
      this.nombreBuscado = '';
    } else {
      this.categoriaNombre = '';
    }

    this.productosService.obtenerProductosConFiltros(filtrosLimpiados).subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error al cargar productos:', err)
    });
  }

  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarProducto(producto);

    this.estadoBotones[producto.id] = true;

    setTimeout(() => {
      this.estadoBotones[producto.id] = false;
    }, 1000);
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

  borrarFiltros(): void {
    localStorage.removeItem('filtros');
    this.categoriaSeleccionada = '';
    this.nombreBuscado = '';
    this.cargarProductos(); // Sin filtros
  }

  onCategoriaChange() {
    this.cargarProductos({ categoria: this.categoriaSeleccionada });
  }
}

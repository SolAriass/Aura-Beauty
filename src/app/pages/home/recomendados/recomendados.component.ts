import { Component, ElementRef, ViewChild } from '@angular/core';
import { Producto, RecomendadosService } from './recomendados.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CarritoService } from '../../../services/carrito.service';

@Component({
  selector: 'app-recomendados',
  imports: [CommonModule, RouterModule],
  templateUrl: './recomendados.component.html',
  styleUrl: './recomendados.component.css'
})
export class RecomendadosComponent {
  productosRecomendados: any[] = [];
  estadoBotones: Record<number, boolean> = {};

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  constructor(private recomendadosService: RecomendadosService, private router: Router, private carritoService: CarritoService) {
    carritoService = carritoService;
  }

  /*Obtenemos los productos recomendados al iniciar el componente */
  ngOnInit(): void {
    this.recomendadosService.obtenerProductos().subscribe({
      next: (productos) => {
        this.productosRecomendados = this.shuffleArray(productos).slice(0, 10); // 10 productos aleatorios
      },
      error: (err) => console.error('Error al obtener productos', err)
    });
  }

  /* Para mezclar un array de forma aleatoria */
  shuffleArray(array: any[]): any[] {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarProducto(producto);

    this.estadoBotones[producto.id] = true;

    setTimeout(() => {
      this.estadoBotones[producto.id] = false;
    }, 1000);
  }

  scrollDerecha(): void {
    this.carousel.nativeElement.scrollBy({ left: 235, behavior: 'smooth' });
  }

  scrollIzquierda(): void {
    this.carousel.nativeElement.scrollBy({ left: -235, behavior: 'smooth' });
  }
}

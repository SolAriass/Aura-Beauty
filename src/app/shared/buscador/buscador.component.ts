import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { BuscadorService, Producto } from './buscador.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-buscador',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  searchQuery: string = '';
  allProducts: Producto[] = [];
  filteredResults: Producto[] = [];
  isHovering: boolean = false;

  constructor(private buscadorService: BuscadorService, private elementRef: ElementRef, private router: Router) {}

  ngOnInit(): void {
    this.buscadorService.obtenerProductos().subscribe({
      next: (productos) => {
        this.allProducts = productos;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      },
    });
  }

  buscarProducto(): void {
    const nombre = this.searchQuery.trim();
    if (nombre) {
      const filtros = { nombre };
      localStorage.setItem('filtros', JSON.stringify(filtros));

      const currentUrl = this.router.url.split('?')[0];

      /* Si estamos en la página de productos, forzamos la recarga */
      if (currentUrl === '/productos') {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/productos']);
        });
      } else {
        this.router.navigate(['/productos']);
      }
    }
  }

  onSearchChange(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredResults = this.allProducts
  .filter(p => p.nombre.toLowerCase().includes(query))
  .slice(0, 3); // Solo 3 sugerencias
  }

  /* Método para manejar el hover sobre las sugerencias */
  get isSearchActive(): boolean {
    return this.searchQuery.trim().length > 0;
  }

  /* Evento para cerrar el buscador al hacer clic fuera */
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.clearSearch();
    }
  }

  /* Evento para detectar el hover sobre las sugerencias */
  clearSearch(): void {
  this.searchQuery = '';
  this.filteredResults = [];
  this.isHovering = false;
}
}

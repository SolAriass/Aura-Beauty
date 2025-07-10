import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { BuscadorService, Producto } from './buscador.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterEvent, RouterModule } from '@angular/router';

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

  constructor(private buscadorService: BuscadorService, private elementRef: ElementRef) {}

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

  onSearchChange(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredResults = this.allProducts
  .filter(p => p.nombre.toLowerCase().includes(query))
  .slice(0, 4); //solo 4 sugerencias
  }

  get isSearchActive(): boolean {
    return this.searchQuery.trim().length > 0;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.clearSearch();
    }
  }

  clearSearch(): void {
  this.searchQuery = '';
  this.filteredResults = [];
  this.isHovering = false;
}
}

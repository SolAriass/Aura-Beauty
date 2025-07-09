import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../productos.service';
import { FiltrosService } from './filtros.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-filtros',
  imports: [FormsModule, CommonModule],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css'
})
export class FiltrosComponent {
  generos = ['Hombre', 'Mujer'];
categorias = ['Labial', 'Base', 'Colonia'];
marcas = ['Maybelline', 'Loreal', 'Dior'];
tipoSeleccionado: string = '';
precioMin: number | null = null;
precioMax: number | null = null;

onGeneroChange(event: any) { /* ... */ }
onCategoriaChange(event: any) { /* ... */ }
onMarcaChange(event: any) { /* ... */ }
emitirFiltros() { /* ... */ }
}

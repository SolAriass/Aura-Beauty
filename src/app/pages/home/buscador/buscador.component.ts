import { Component } from '@angular/core';
import { BuscadorService, Producto } from './buscador.service';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  searchControl = new FormControl('');
  sugerencias: Producto[] = [];

  constructor(private buscadorService: BuscadorService) {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) =>
        query && query.length > 1
          ? this.buscadorService.buscarProductos(query)
          : []
      )
    ).subscribe((res: Producto[]) => {
      this.sugerencias = res;
    });
  }
}

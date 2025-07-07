import { Component } from '@angular/core';
import { BuscadorService, Producto } from './buscador.service';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscador',
  imports: [CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  resultados$: Observable<Producto[]>;
  private terminoBusqueda = new Subject<string>();

  constructor(private BuscadorService: BuscadorService) {
    this.resultados$ = this.terminoBusqueda.pipe(
      debounceTime(300),              // espera a que el usuario deje de escribir por 300ms
      distinctUntilChanged(),         // evita repeticiones de la misma búsqueda
      switchMap((query) => this.BuscadorService.buscarPorNombre(query))
    );
  }

  onInputChange(termino: string): void {
    this.terminoBusqueda.next(termino);
  }
}

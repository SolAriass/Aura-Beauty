import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from "./carrousel/carrousel.component";
import { Router} from '@angular/router';
import { ProductosService, Producto } from '../productos/productos.service';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from "../carrito/carrito.component";
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { RecomendadosComponent } from './recomendados/recomendados.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrouselComponent, CommonModule, FormsModule, CarritoComponent, FooterComponent, HeaderComponent, RecomendadosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

 constructor(private router: Router,  private productosService: ProductosService) {
 }

  verCategoria(categoriaId: number): void {
    const filtros = { categoria: categoriaId };
    localStorage.setItem('filtros', JSON.stringify(filtros));
    this.router.navigate(['/productos']);
  }

  irAProductos() {
    localStorage.removeItem('filtros');
    this.router.navigate(['/productos']);
  }
}

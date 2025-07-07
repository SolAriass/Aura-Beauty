import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from "./carrousel/carrousel.component";
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';
import { ProductosService, Producto } from '../productos/productos.service';
import { BuscadorComponent } from './buscador/buscador.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrouselComponent, BuscadorComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

 constructor(private authService: AuthService, private router: Router,  private productosService: ProductosService,) {}

 masVendidos: Producto[] = [];

ngOnInit(): void {
  this.productosService.obtenerProductos().subscribe({
    next: (data) => {
      this.productos = data;
      this.productosFiltrados = data;

      this.masVendidos = this.productos.slice(0, 5);
    },
    error: (err) => console.error(err)
  });
}

filtrarProductos(event: Event): void {
  const inputElement = event.target as HTMLInputElement;
  const valor = inputElement?.value?.trim().toLowerCase() || '';

  if (!valor) {
    this.productosFiltrados = this.productos;
    return;
  }

  this.productosFiltrados = this.productos.filter(p =>
    p.nombre.toLowerCase().includes(valor)
  );
}


 irAPerfumes() {
    this.router.navigate(['/productos']);
  }



  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}

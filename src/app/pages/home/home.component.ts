import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from "./carrousel/carrousel.component";
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';
import { ProductosService, Producto } from '../productos/productos.service';
import { BuscadorComponent } from '../../shared/buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from "../carrito/carrito.component";
import { RouterModule } from '@angular/router';
import { CarritoService } from "../../services/carrito.service";
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrouselComponent, BuscadorComponent, CommonModule, FormsModule, CarritoComponent, RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

 constructor(private router: Router,  private productosService: ProductosService) {
 }

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

  irAProductos() {
    this.router.navigate(['/productos']);
  }


}

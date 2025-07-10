import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BuscadorComponent } from "../buscador/buscador.component";

@Component({
  selector: 'app-header',
  imports: [BuscadorComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  carritoService: CarritoService;

  constructor(private router: Router, private authService: AuthService,carritoService: CarritoService) {
    this.carritoService = carritoService;
  }


  irAPerfil() {
    this.router.navigate(['/perfil']);
  }

  logout() {
    this.carritoService.vaciarCarrito();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

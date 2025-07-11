import { Component, OnInit } from '@angular/core';
import { Usuario, UsuarioService } from './perfil.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CarritoService } from '../../services/carrito.service';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
  imports: [CommonModule,  RouterModule, FooterComponent],
})
export class PerfilComponent implements OnInit {
  usuario!: Usuario;
  carritoService: CarritoService;

  constructor(private usuarioService: UsuarioService, private router: Router, private authService: AuthService, carritoService: CarritoService) {
    this.carritoService = carritoService;
  }

  ngOnInit(): void {
    this.usuarioService.obtenerPerfil().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.usuario = data;
      },
      error: (err) => console.error('Error al cargar perfil:', err)
    });
  }

  logout() {
    this.carritoService.vaciarCarrito();
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

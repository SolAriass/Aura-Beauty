import { Component, OnInit } from '@angular/core';
import { Usuario, UsuarioService } from './perfil.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
  imports: [CommonModule],
})
export class PerfilComponent implements OnInit {
  usuario!: Usuario;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
  this.usuarioService.obtenerPerfil().subscribe({
    next: (data) => {
      console.log('Datos recibidos:', data);
      this.usuario = data;
    },
    error: (err) => console.error('Error al cargar perfil:', err)
  });
}
}

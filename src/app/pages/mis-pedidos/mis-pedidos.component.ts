import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VentasService } from '../../services/ventas.service';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from '../carrito/carrito.component';


@Component({
  selector: 'app-mis-pedidos',
  imports: [CommonModule, RouterModule, CarritoComponent],
  templateUrl: './mis-pedidos.component.html',
  styleUrl: './mis-pedidos.component.css'
})
export class MisPedidosComponent implements OnInit {
  usuarioId: number = 0;
  pedidos: any[] = [];

  constructor(private ventasService: VentasService) {}

  ngOnInit(): void {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    this.usuarioId = usuario.id;

    this.ventasService.getVentasPorUsuario(this.usuarioId).subscribe({
      next: (data) => {
        this.pedidos = data;
      },
      error: (err) => {
        console.error('Error al obtener pedidos:', err);
      }
    });
  }
}


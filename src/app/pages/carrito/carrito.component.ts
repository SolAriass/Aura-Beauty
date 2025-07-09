import { Component, OnInit } from '@angular/core';
import { CarritoService, CarritoItem } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';
import { VentasService } from '../../services/ventas.service';


@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  carrito: CarritoItem[] = [];
   usuarioId: number = 0;

  constructor(private carritoService: CarritoService,
    private ventasService: VentasService) {}

  ngOnInit(): void {
    // Obtener el usuario desde localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    this.usuarioId = usuario.id || 0;

    this.carrito = this.carritoService.obtenerCarrito();

    // Suscribirse a los cambios del carrito
    this.carritoService.carrito$.subscribe(carrito => {
      this.carrito = carrito;
    });
  }

  aumentarCantidad(item: CarritoItem) {
    item.cantidad++;
    this.carritoService.actualizarCarrito(this.carrito);
  }

  disminuirCantidad(item: CarritoItem) {
    if (item.cantidad > 1) {
      item.cantidad--;
    } else {
      this.eliminarProducto(item);
    }
    this.carritoService.actualizarCarrito(this.carrito);
  }



eliminarProducto(item: CarritoItem) {
  const confirmar = confirm(`¿Eliminar todas las unidades de "${item.producto.nombre}" del carrito?`);
  if (confirmar) {
    const index = this.carrito.findIndex(i => i.producto.id === item.producto.id);
    if (index !== -1) {
      this.carrito.splice(index, 1);
      this.carritoService.actualizarCarrito(this.carrito);
    }
  }
}


  calcularTotal(): number {
    return this.carrito.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }


finalizarCompra() {
  if (this.carrito.length === 0) {
    alert('El carrito está vacío');
    return;
  }

  this.ventasService.finalizarCompra({
    usuarioId: this.usuarioId,
    carrito: this.carrito
  }).subscribe({
    next: (res) => {
      alert('Compra realizada con éxito');
      this.carritoService.vaciarCarrito();
    },
    error: (err) => {
      alert('Error al realizar la compra');
      console.error(err);
    }
  });
}



}

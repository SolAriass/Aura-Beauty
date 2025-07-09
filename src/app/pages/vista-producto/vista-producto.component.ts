import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto, ProductosService } from '../productos/productos.service';
import { NgIf} from '@angular/common';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from '../../services/carrito.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vista-producto',
  imports: [NgIf, CarritoComponent, RouterModule],
  templateUrl: './vista-producto.component.html',
  styleUrl: './vista-producto.component.css'
})
export class VistaProductoComponent implements OnInit {
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productosService.getProductoPorId(id).subscribe(
        (data) => {
          this.producto = data;
        },
        (error) => {
          console.error('Error al obtener el producto:', error);
        }
      );
    }
  }

  agregarAlCarrito(producto: Producto): void {
this.carritoService.agregarProducto(producto);

  }
}

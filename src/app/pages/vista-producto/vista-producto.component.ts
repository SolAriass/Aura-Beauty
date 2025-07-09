import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos/productos.service';
import { NgIf} from '@angular/common';

@Component({
  selector: 'app-vista-producto',
  imports: [NgIf],
  templateUrl: './vista-producto.component.html',
  styleUrl: './vista-producto.component.css'
})
export class VistaProductoComponent implements OnInit {
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
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

  agregarAlCarrito(producto: any): void {
    console.log('Añadido al carrito:', producto);
    alert('Producto añadido al carrito!');
  }
}

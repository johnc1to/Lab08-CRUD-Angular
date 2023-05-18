import { Component} from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from 'src/models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent {
  productos: Producto[] = [];
  productoSeleccionado: Producto | undefined;

  constructor(private productoService: ProductoService) {
    this.productos = this.productoService.obtenerProductos();
  }

  obtenerProductos() {
    this.productos = this.productoService.obtenerProductos();
  }

  editarProducto(producto: Producto) {
    this.productoSeleccionado = producto;
  }  

  borrarProducto(index: number) {
    this.productos.splice(index, 1);
  }
}

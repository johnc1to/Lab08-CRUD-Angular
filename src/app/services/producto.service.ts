import { Injectable } from '@angular/core';
import { Producto } from 'src/models/producto';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  productos: Producto[] = [];

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  obtenerProductos() {
    return this.productos;
  }

  actualizarProducto(producto: Producto) {
    const index = this.productos.findIndex(p => p.codigo === producto.codigo);
    if (index !== -1) {
      this.productos[index] = producto;
    }
  }

  obtenerProductoPorCodigo(codigo: string): Producto {
    return this.productos.find(producto => producto.codigo === codigo)!;
  }

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/models/producto';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  producto: Producto | undefined;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private router: Router,
  ) { }

  ngOnInit() {
    const codigo = this.route.snapshot.paramMap.get('codigo');
    if (codigo) {
      this.producto = this.productoService.obtenerProductoPorCodigo(codigo);
    }
  }

  guardarCambios() {
    if (this.producto) {
      this.productoService.actualizarProducto(this.producto);
      this.router.navigate(['/listar-productos']);
    }
  }
}

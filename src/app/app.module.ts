import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ProductoService } from './services/producto.service';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    CrearProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

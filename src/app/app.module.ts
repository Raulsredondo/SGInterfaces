import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteTablaComponent } from './components/ClienteFolder/cliente-tabla/cliente-tabla.component';
import { ClienteComponent } from './components/ClienteFolder/cliente/cliente.component';
import { ProductoTablaComponent } from './components/ProductoFolder/producto-tabla/producto-tabla.component';
import { ProductoComponent } from './components/ProductoFolder/producto/producto.component';
import { ProveedorTablaComponent } from './components/ProveedorFolder/proveedor-tabla/proveedor-tabla.component';
import { ProveedorComponent } from './components/ProveedorFolder/proveedor/proveedor.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteTablaComponent,
    ProductoComponent,
    ProveedorComponent,
    NavbarComponent,
    ProductoTablaComponent,
    ProveedorTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteTablaComponent } from './components/ClienteFolder/cliente-tabla/cliente-tabla.component';
import { ClienteComponent } from './components/ClienteFolder/cliente/cliente.component';
import { ProductoTablaComponent } from './components/ProductoFolder/producto-tabla/producto-tabla.component';
import { ProductoComponent } from './components/ProductoFolder/producto/producto.component';
import { ProveedorTablaComponent } from './components/ProveedorFolder/proveedor-tabla/proveedor-tabla.component';
import { ProveedorComponent } from './components/ProveedorFolder/proveedor/proveedor.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'cliente-tabla', component: ClienteTablaComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'producto-tabla', component: ProductoTablaComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'proveedor-tabla', component: ProveedorTablaComponent},
  { path: 'proveedor', component: ProveedorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'cliente' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

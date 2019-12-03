import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ClienteComponent } from './components/ClienteFolder/cliente-tabla/cliente.component';
import { ProductoComponent } from '../app/components/producto/producto.component';
import { ProveedorComponent } from '../app/components/proveedor/proveedor.component';
const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'proveedor', component: ProveedorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'cliente' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

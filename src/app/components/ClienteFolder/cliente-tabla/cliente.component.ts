import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { ClienteModel } from '../../../models/cliente.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-table',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: ClienteModel[] = [];
  cargando = false;


  constructor( private ClienteService: ClienteService ) { }

  ngOnInit() {

    this.cargando = true;
    this.ClienteService.getClientes()
      .subscribe( resp => {
        this.clientes = resp;
        this.cargando = false;
      });

  }

  borrarCliente( cliente: ClienteModel, i: number ) {
    
    console.log(cliente);
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Está seguro que desea borrar este registro?',
      showConfirmButton: true,
      showCancelButton: true,
    }).then( resp => {

      if ( resp.value ) {
        this.clientes.splice(i, 1);
        this.ClienteService.borrarCliente( cliente.id ).subscribe();
      }

    });
  }

}

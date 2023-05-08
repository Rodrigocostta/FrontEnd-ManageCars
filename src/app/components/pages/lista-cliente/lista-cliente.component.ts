import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent {

  painelOpenState = false ;
  displayedColumns: string[] = ['info','nome','placa','acoes'];
  dataSource = ELEMENT_DATA;
}

export interface ListarCliente {

  info: string;
  nome: string;
  placa: string;
 acoes: string;

}

const ELEMENT_DATA: ListarCliente[] = [
  {info: '',nome: 'ze ricardo', placa:'hti7845', acoes: ''},


];

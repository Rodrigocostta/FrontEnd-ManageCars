import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent {

  painelOpenState = false ;
  displayedColumns: string[] = [ 'name', 'weight', 'symbol','servico','total','acoes'];
  dataSource = ELEMENT_DATA;
}

export interface ListarCliente {
  name: string;
  weight: number;
  symbol: string;
  acoes: string;
}

const ELEMENT_DATA: ListarCliente[] = [
  {name: '', weight: 0, symbol: '', acoes: ''},


];

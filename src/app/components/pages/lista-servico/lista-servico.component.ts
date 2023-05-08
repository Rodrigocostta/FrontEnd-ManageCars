import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-servico',
  templateUrl: './lista-servico.component.html',
  styleUrls: ['./lista-servico.component.css']
})
export class ListaServicoComponent {

  painelOpenState = false ;
  displayedColumns: string[] = ['descricao','valor','acoes'];
  dataSource = ELEMENT_DATA;
}
  export interface ListarCliente{

    descricao: string;
    valor: number;


  }

  const ELEMENT_DATA: ListarCliente[] = [
    {descricao:'teste',valor:200},


  ];

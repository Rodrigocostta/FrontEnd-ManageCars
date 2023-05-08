import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent {


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

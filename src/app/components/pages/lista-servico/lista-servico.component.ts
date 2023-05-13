import { ElementDialogComponent } from './../../shared/element-dialog/element-dialog.component';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-lista-servico',
  templateUrl: './lista-servico.component.html',
  styleUrls: ['./lista-servico.component.css']
})
export class ListaServicoComponent implements OnInit {

@ViewChild(MatTable)
  table!: MatTable<any>;
  painelOpenState = false ;
  displayedColumns: string[] = ['descricao','valor','acoes'];
  dataSource = ELEMENT_DATA;


  constructor(public dialog: MatDialog){}
  ngOnInit(): void{}


  openDialog(element:ListarLancamneto | null):void{
      const dialogRef = this.dialog.open(ElementDialogComponent, {
        width:'265px',
        data: element === null ?
         {
          descricao: '',
          valor: null
        }:{
          descricao: element.descricao,
          valor: element.valor
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result !== undefined){
          if(this.dataSource.map(p => p.valor).includes(result.position)){
            this.dataSource[result.position - 1 ] = result;
            this.table.renderRows();

          }else
          {
            this.dataSource.push(result);
          this.table.renderRows();
          }


        }

      });

  }

  //update
  onUpdate(element:ListarLancamneto): void{  ''
    this.openDialog(element);
  }

  //delete
  onDelete(valor:number):void{
    this.dataSource = this.dataSource.filter(p => p.valor !== valor);

  }
}
  export interface ListarLancamneto{

    descricao: string;
    valor: number;
  }

  const ELEMENT_DATA:ListarLancamneto[] = [
    {descricao:'motor',valor:50.02},
    {descricao:'chassi',valor:50.10},
    {descricao:'lvagem + cera',valor:50.00},
    {descricao:'Lavagem',valor:35.00},

  ];

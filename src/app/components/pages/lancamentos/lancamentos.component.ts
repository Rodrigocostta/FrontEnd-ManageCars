import { LancamentoComponent } from './../../shared/lancamento/lancamento.component';
import { ElementDialogComponent } from './../../shared/element-dialog/element-dialog.component';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';





@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {

    @ViewChild(MatTable)
      table!: MatTable<any>;
      painelOpenState = false ;
      displayedColumns: string[] = ['id','data','categoria','descricao','pagamento','situacao','valor','acoes'];
      dataSource = ELEMENT_DATA;


      constructor(public dialog: MatDialog){}
      ngOnInit(): void{}


      openDialog(element:Lancamentos| null):void{
          const dialogRef = this.dialog.open(LancamentoComponent, {
          width:'500px',
            data: element === null ?
             {
              id:null,
              data:'',
              categoria: '',
              descricao:'',
              pagamento:'',
              situacao: '',
              valor: null
            }:{
              id: element.id,
              data: element.data,
              categoria: element.categoria,
              descricao:element.descricao,
              pagamento:element.pagamento,
              situacao: element.situacao,
              valor: element.valor
            }
          });

          dialogRef.afterClosed().subscribe(result => {
            if(result !== undefined){
              if(this.dataSource.map(p => p.id).includes(result.position)){
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
      onUpdate(element:Lancamentos): void{  ''
        this.openDialog(element);
      }

      //delete
      onDelete(id:number):void{
        this.dataSource = this.dataSource.filter(p => p.valor !== id);

      }
    }

export interface Lancamentos{
    id:number;
    data:string;
    categoria: String;
    descricao: string;
    pagamento:string;
    situacao: string;
    valor: number;


  }

  const ELEMENT_DATA: Lancamentos[] = [
    {id:1,data:'25/12/2022',categoria:'pruduto',descricao:'Lm',pagamento:'debito',situacao:'pago',valor:70.00},
    {id:2,data:'29/03/2022',categoria:'lanche',descricao:'pão de  queijo',pagamento:'dinhrito',situacao:'pago',valor:50.00},
    {id:3,data:'05/08/2022',categoria:'manutenção',descricao:'mangueira',pagamento:'credito',situacao:'pago',valor:200.00},
    {id:4,data:'14/09/2022',categoria:'salario',descricao:'salario ray',pagamento:'pix',situacao:'pago',valor:1500.00}



  ];

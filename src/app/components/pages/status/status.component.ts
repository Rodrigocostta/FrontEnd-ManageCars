import { StatusElement } from 'src/app/models/StatusElement';
import { StatusService } from 'src/app/servicies/status.service';
import { InfoComponent } from '../../shared/info/info.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { InfoOrdemServicoComponent } from '../../shared/info-ordem-servico/info-ordem-servico.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: '',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})

export class StatusComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<any>;
  painelOpenState = false;
  displayedColumns: string[] = [

    'nomeCliente',
    'placaVeiculo',
    'formaPagamento',
    'status',
    'totalPagar',
    'acoes',
  ];

  dataSource!: StatusElement[];

  constructor(public dialog: MatDialog, public chamadaServico: StatusService) {
    this.chamadaServico.getstatus().subscribe((data: StatusElement[]) => {
      this.dataSource = data;
    });


  }


  ngOnInit(): void {}

  formularioCliente(element: StatusElement | null): void {
    const dialogRef = this.dialog.open(InfoComponent, {
      width: '500px',
      data:
        element === null
          ? {

            nomeCliente: '',
            placaVeiculo: '',
            formaPagamento:'',
              status: '',
              totalPagar: '',
            }
          : {
              id: element.id,
              nomeCliente: element.nomeCliente,
              placaVeiculo: element.placaVeiculo,
              formaPagamento: element.formaPagamento,
              status: element.status,
              totalPagar: element.totalPagar,
            },
    });



    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        const index = this.dataSource.findIndex((e) => e.id === result.cont);
        if (index !== -1) {
          this.chamadaServico
            .update(result)
            .subscribe((updatedResult: StatusElement) => {
              this.dataSource[index] = updatedResult;
              this.table.renderRows();
            });
        } else {
          this.chamadaServico
            .create(result)
            .subscribe((data: StatusElement) => {
              this.dataSource.push(result);
              this.table.renderRows();
            });
        }
      }
    });
  }
  infoOrdemSrivico(info: StatusElement | null ) {
    this.dialog.open(InfoOrdemServicoComponent, {

      data:
        info === null
          ? {

            nomeCliente: '',

            }
          : {
              id: info.id,
              nomeCliente: info.nomeCliente,

            },
    });
  }



  //update
  onUpdate(element: StatusElement): void {
    ('');
    this.formularioCliente(element);
  }

  //delete
  onDelete(id: number): void {
    this.chamadaServico.delete(id).subscribe(() => {
      this.dataSource = this.dataSource.filter((p) => p.id !== id);
    });
  }
}

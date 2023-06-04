import { StatusElement } from 'src/app/models/StatusElement';
import { StatusService } from 'src/app/servicies/status.service';
import { InfoComponent } from '../../shared/info/info.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

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
    'info',
    'nome',
    'modelo',
    'placa',
    'servico',
    'total',
    'acoes',
  ];

  dataSource!: StatusElement[];

  constructor(public dialog: MatDialog, public chamadaServico: StatusService) {
    this.chamadaServico.getLancamento().subscribe((data: StatusElement[]) => {
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

              nome: '',
              placa: '',
              modelo:'',
              servico: '',
              total: '',
            }
          : {
              id: element.id,
              nome: element.nome,
              modelo: element.modelo,

              placa: element.placa,
              servico: element.servico,
              total: element.total,
            },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        const index = this.dataSource.findIndex((e) => e.id === result.id);
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

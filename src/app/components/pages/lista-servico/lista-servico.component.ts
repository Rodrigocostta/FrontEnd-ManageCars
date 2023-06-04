import { ElementDialogComponent } from './../../shared/element-dialog/element-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ServicoElement } from 'src/app/models/ServicoElement';
import { ServicoService } from 'src/app/servicies/servico.service';

@Component({
  selector: 'app-lista-servico',
  templateUrl: './lista-servico.component.html',
  styleUrls: ['./lista-servico.component.css'],
})
export class ListaServicoComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  painelOpenState = false;
  displayedColumns: string[] = ['descricao', 'valor', 'acoes'];
  dataSource!: ServicoElement[];

  constructor(public dialog: MatDialog, public chamadaServico: ServicoService) {


    this.chamadaServico.getLancamento().subscribe((data: ServicoElement[]) => {
      this.dataSource = data;
    });
  }

  ngOnInit(): void {}

  formularioServico(element: ServicoElement | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '265px',
      data:
        element === null
          ? {
              descricao: '',
              valor: '',
            }
          : {
              id: element.id,
              descricao: element.descricao,
              valor: element.valor,
            },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        const index = this.dataSource.findIndex((e) => e.id === result.id);
        if (index !== -1) {
          this.chamadaServico.update(result).subscribe((updatedResult: ServicoElement) => {
            this.dataSource[index] = updatedResult;
            this.table.renderRows();
          });
        } else {
          this.chamadaServico
            .create(result)
            .subscribe((data: ServicoElement) => {
              this.dataSource.push(result);
              this.table.renderRows();
            });
        }
      }
    });
  }

  //update
  onUpdate(element: ServicoElement): void {
    ('');
    this.formularioServico(element);
  }

  //delete
  onDelete(id: number): void {
    this.chamadaServico.delete(id).subscribe(() => {
      this.dataSource = this.dataSource.filter((p) => p.id !== id);
    });
  }
}

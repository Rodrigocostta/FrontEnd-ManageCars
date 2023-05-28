import { LancamentosElement } from 'src/app/models/lancamentoElement';
import { LancamentoComponent } from './../../shared/lancamento/lancamento.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { LancamentoService } from 'src/app/servicies/lancamento.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css'],
  providers: [LancamentoService],
})
export class LancamentosComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  painelOpenState = false;
  displayedColumns: string[] = [
    'id',
    'data',
    'categoria',
    'descricao',
    'formaDePagamento',
    'lancamentoStatus',
    'valor',
    'acoes',
  ];
  dataSource!: LancamentosElement[];

  constructor(
    public dialog: MatDialog,
    public chamadaServico: LancamentoService
  ) {
    this.chamadaServico
      .getLancamento()
      .subscribe((data: LancamentosElement[]) => {
        this.dataSource = data;
      });
  }

  ngOnInit(): void {}

  formularioCliente(element: LancamentosElement | null): void {
    const dialogRef = this.dialog.open(LancamentoComponent, {
      width: '500px',
      data:
        element === null
          ? {
              categoria: '',
              descricao: '',
              pagamento: '',
              situacao: '',
              valor: '',
            }
          : {
              id: element.id,
              data: element.data,
              categoria: element.categoria,
              descricao: element.descricao,
              formaDePagamento: element.formaDePagamento,
              lancamentoStatus: element.lancamentoStatus,
              valor: element.valor,
            },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        const index = this.dataSource.findIndex((e) => e.id === result.id);
        if (index !== -1) {
          this.dataSource[index] = result;
          this.table.renderRows();
        } else {
          this.chamadaServico
            .create(result)
            .subscribe((data: LancamentosElement) => {
              this.dataSource.push(result);
              this.table.renderRows();
            });
        }
      }
    });
  }

  //update
  onUpdate(element: LancamentosElement): void {
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

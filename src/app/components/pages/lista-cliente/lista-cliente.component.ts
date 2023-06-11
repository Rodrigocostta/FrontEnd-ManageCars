import { NovoClienteElement } from './../../../models/NovoCliente';
import { DialogclienteComponent } from './../../shared/dialog-cliente/dialog-cliente.component';
import { MatDialog } from '@angular/material/dialog';
import { ClienteElement } from './../../../models/ClienteElement';
import { Component, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { ClienteElementService } from 'src/app/servicies/cliente-element.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css'],
})
export class ListaClienteComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  painelOpenState = false;
  displayedColumns: string[] = [
   'nome',
   'contato',
   'acoes'];
  dataSource!: ClienteElement[];
    novoCliente: NovoClienteElement = {
      nome: '',
      telefones: [],
      veiculos: [{
        marca: '',
        modelo: '',
        placa: ''
      }]
    };



  constructor(
    public dialog: MatDialog,
    public chamadaServico: ClienteElementService
  ) {
    this.chamadaServico.ListarCliente().subscribe((data: ClienteElement[]) => {
      this.dataSource = data;



    });
  }

  ngOnInit(): void {}

  cadastrarNovoCliente(): void {
    this.chamadaServico.create(this.novoCliente).subscribe((data: NovoClienteElement) => {
      this.dataSource.push(this.novoCliente);
      this.table.renderRows();
    });
  }

  formularioCliente(element: ClienteElement | null): void {
    const dialogRef = this.dialog.open(DialogclienteComponent, {
      width: '265',
      data:
        element === null
          ? {

              nome: '',
              telefones:'',

            }
          : {
              id: element.id,
              nome: element.nome,
              telefones: element.telefones,

            },


    });



    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        const index = this.dataSource.findIndex((e) => e.id === result.id);
        if (index !== -1) {
          this.chamadaServico.update(result).subscribe((updatedResult: ClienteElement) => {
            this.dataSource[index] = updatedResult;
            this.table.renderRows();
          });
        } else {
          this.chamadaServico
            .create(result)
            .subscribe((data: ClienteElement) => {
              this.dataSource.push(result);
              this.table.renderRows();
            });
        }
      }
    });
  }



  //update
  onUpdate(element: ClienteElement): void {
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

import { MatDialog } from '@angular/material/dialog';
import { ClienteElement } from './../../../models/ClienteElement';
import { Component, OnInit } from '@angular/core';
import { MatTable} from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { ClienteElementService } from 'src/app/servicies/cliente-element.service';
import { NovoClienteComponent } from '../novo-cliente/novo-cliente.component';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit{

  @ViewChild(MatTable)
  table!: MatTable<any>;
  painelOpenState = false ;
  displayedColumns: string[] = ['id','nome','contato','acoes'];
  dataSource!: ClienteElement[];

  constructor(
    public dialog: MatDialog,
    public  chamadaServico: ClienteElementService
    ){

    this.chamadaServico.ListarCliente().subscribe((data: ClienteElement[]) =>
      { this.dataSource = data;
      });

    }

  ngOnInit(): void{}


  formularioCliente(element:ClienteElement| null):void{
    const dialogRef = this.dialog.open(NovoClienteComponent, {
    width:'500px',
      data: element === null ?
       {
        id:null,
        nome:'',
        contato: ''

      }:{
        id: element.id,
        nome: element.nome,
        contato: element.contato
      }
    });
  }

}


import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoComponent } from '../../shared/info/info.component';
@Component({
  selector: '',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent {
  painelOpenState = false ;
  displayedColumns: string[] = [ 'info','nome', 'placa','servico','total','acoes'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(InfoComponent);
  }

    //delete
    onDelete(placa:string):void{
      this.dataSource = this.dataSource.filter(p => p.placa !== placa);

  }
}


export interface StatusElement {
  info: string;
  nome: string;
  placa: string;
  servico: string;
  acoes: string;
  total:number;
}

const ELEMENT_DATA: StatusElement[] = [
  {info:'',nome:'Diego Silva', placa: 'HTI4578',servico: 'lavagem de banco',total: 250.00, acoes: ''},
  {info:'',nome:'Zé Francisco', placa: 'HTI4578',servico: 'lavagem ',total: 30.00, acoes: ''},


];

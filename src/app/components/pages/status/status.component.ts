import { Component } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent {
  painelOpenState = false ;
  displayedColumns: string[] = [ 'info','nome', 'placa','servico','total','acoes'];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  info: string;
  nome: string;
  placa: string;
  servico: string;
  acoes: string;
  total:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {info:'',nome:'Diego Silva', placa: 'HTI4578',servico: 'lavagem de banco',total: 250.00, acoes: ''},
  {info:'',nome:'Zé Francisco', placa: 'HTI4578',servico: 'lavagem ',total: 30.00, acoes: ''},


];

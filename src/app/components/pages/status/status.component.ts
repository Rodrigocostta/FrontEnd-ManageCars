import { Component } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent {
  painelOpenState = false ;
  displayedColumns: string[] = [ 'name', 'weight', 'symbol','acoes'];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
  acoes: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', weight: 1.0079, symbol: 'H', acoes: 'hkj'},


];

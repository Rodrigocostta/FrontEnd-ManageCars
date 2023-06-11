import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import { StatusElement } from 'src/app/models/StatusElement';


@Component({
  selector: 'app-info-ordem-servico',
  templateUrl: './info-ordem-servico.component.html',
  styleUrls: ['./info-ordem-servico.component.css'],
    standalone: true,
  imports: [MatDialogModule, NgIf],
})
export class InfoOrdemServicoComponent {
  element!: StatusElement;
      option!: boolean;


  constructor(
    public dialogRef: MatDialogRef<StatusElement>,
    @Inject(MAT_DIALOG_DATA) public data: StatusElement) {}

    ngOnInit():void{

      if (this.data.id!= null){
        this.option = true;
      }else{
        this.option = false;

      }
      }

    onCancel(): void {
      this.dialogRef.close();
    }

}

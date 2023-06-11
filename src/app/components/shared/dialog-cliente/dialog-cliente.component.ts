import { Component,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ClienteElement } from 'src/app/models/ClienteElement';


@Component({
  selector: 'app-dialog-cliente',
  templateUrl: './dialog-cliente.component.html',
  styleUrls: ['./dialog-cliente.component.css']
})
export class DialogclienteComponent implements OnInit  {

  element!: ClienteElement;
  option!: boolean;


  constructor(
    public dialogRef: MatDialogRef<ClienteElement>,
    @Inject(MAT_DIALOG_DATA) public data: ClienteElement) {}


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

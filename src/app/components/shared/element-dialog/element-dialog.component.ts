import { ServicoElement } from './../../../models/ServicoElement';
import { Component,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.css']
})
export class ElementDialogComponent implements OnInit {
element!: ServicoElement;
option!: boolean;


constructor(
  public dialogRef: MatDialogRef<ElementDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: ServicoElement) {}


ngOnInit():void{

  if (this.data.id != null){
    this.option = true;
  }else{
    this.option = false;


  }

}
onCancel(): void {
  this.dialogRef.close();
}
}

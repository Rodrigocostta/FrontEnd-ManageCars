import { Component,Inject,OnInit } from '@angular/core';
import { ListarLancamneto } from '../../pages/lista-servico/lista-servico.component';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.css']
})
export class ElementDialogComponent implements OnInit {
element!: ListarLancamneto;
option!: boolean;


constructor(
  public dialogRef: MatDialogRef<ElementDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: ListarLancamneto) {}


ngOnInit():void{

  if (this.data.valor != null){
    this.option = true;
  }else{
    this.option = false;


  }

}
onCancel(): void {
  this.dialogRef.close();
}
}

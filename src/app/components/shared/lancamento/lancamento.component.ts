import { Component,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { LancamentosElement } from 'src/app/models/lancamentoElement';
@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})

  export class LancamentoComponent implements OnInit {

      element!: LancamentosElement;
      option!: boolean;


      constructor(
        public dialogRef: MatDialogRef<LancamentosElement>,
        @Inject(MAT_DIALOG_DATA) public data: LancamentosElement) {}


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
